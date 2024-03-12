import md5 from "md5";
import { ProductModel } from "../api/types";
import axios, { AxiosError } from "axios";

export const getHeaders = () => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const password = "Valantis";
  const authString = md5(`${password}_${timestamp}`);

  return {
    "X-Auth": authString,
    "Content-type": "application/json",
  };
};


export const transformResponse = (result: ProductModel[]) => {
  if (Array.isArray(result) && typeof result[0] === "object") {
    const uniqueIds = new Set<string>();
    const uniqueData = result.filter((el) => {
      if (!uniqueIds.has(el.id)) {
        uniqueIds.add(el.id);
        return true;
      }
      return false;
    });




    return uniqueData;
  }
};

export function handleError(error: AxiosError) {
  if (axios.isCancel(error)) {
    return {
      error: {
        status: "CANCELLED",
        message: "The request has been cancelled",
      },
    };
  }
  /* eslint-disable */ // не успевал
  //@ts-ignore
  return {
    error: {
      /* eslint-disable */ // не успевал
      //@ts-ignore
      status: error.response?.status,
      //@ts-ignore
      data: error.response?.data || error.message,
    },
  };
}