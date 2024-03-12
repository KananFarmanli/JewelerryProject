import { createApi, retry } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { getHeaders, handleError, transformResponse } from "../utils/api";
import { Actions, ApiPayload, ProductModel } from "./types";




const API_BASE_URL = "https://api.valantis.store:41000";

const customBaseQuery: BaseQueryFn<
  {
    url: string;
    method?: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
    signal?: AbortSignal;
  },
  unknown,
  unknown
> = async ({ url, method, data, headers, params, signal }) => {

  try {
    const response = await axios({
      url: API_BASE_URL + url,
      method,
      data,
      params,
      headers: { ...headers, ...getHeaders() },
      signal
    });
    return { data: response.data };
  } catch (axiosError) {
 return handleError(axiosError as AxiosError);
  }
};

const staggeredBaseQuery = retry(customBaseQuery, {
  maxRetries: 3,
});

export const apiSlice = createApi({
  reducerPath: "productsAPI",
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getProducts: builder.mutation<ProductModel[], ApiPayload>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
  
          const idsresponse = await fetchWithBQ({
            url: "/",
            method: "POST",
            data: _arg.result,
            signal: _arg.signal
          });
/* eslint-disable */  // не успевал
//@ts-ignore
          if (idsresponse?.data?.result.length === 0) {
           throw new Error("Nothing found")
          }
          if (idsresponse.error) throw idsresponse.error;
          const { result: ids } = idsresponse.data as { result: string[] };
          const itemsResponse = await fetchWithBQ({
            url: "/",
            method: "POST",
            data: {
              action: Actions.ITEMS,
              params: {
                ids,
              },
            },
            signal: _arg.signal,
          });
          if (itemsResponse.error) throw itemsResponse.error;
          const result = itemsResponse.data as { result: ProductModel[] };
          const res = transformResponse(result.result);
          return {
            data: res,
          };
        } catch (error) {
          console.error(error)
          return { error };
        }
      },
    }),
  }),
});

export const { useGetProductsMutation } = apiSlice;

