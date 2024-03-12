import { useEffect, useState } from "react";
import { ring1, ring2, ring3, ring4, ring5 } from "../assets";
import { useSearchParams } from "react-router-dom";
import { useGetProductsMutation } from "../api/apiSlice";
import { Actions, ApiPayload } from "../api/types";
import { v4 as uuidv4 } from "uuid";
import { Hourglass } from "react-loader-spinner";
import cl from "classnames";
import { Card, Filter, Pagination } from "../components";
import { Link } from "react-router-dom";

type ParamsType = {
  brand?: string;
  price?: number;
  product?: string;
  [key: string]: string | number | undefined;
};

const svgs = [ring1, ring2, ring3, ring4, ring5];

const getRandomSvg = () => {
  const randomIndex = Math.floor(Math.random() * svgs.length);
  return svgs[randomIndex];
};

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [overallItems] = useState(8004);
  const [showPagination, setShowPagination] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    Number(searchParams.get("items")) || 10
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [getProducts, { data, isError, error }] = useGetProductsMutation();

  useEffect(() => {
    const controller = new AbortController();
    const filterKeys = ["brand", "price", "product"];
    let payload: ApiPayload | Record<string, never> = {};
    const params: ParamsType  = {};
    searchParams.forEach((value, key) => {
      if (key === "price") {
        params[key] = Number(value);
      } else {
        params[key] = value;
      }
    });

    const hasFilter = filterKeys.some((key) => searchParams.has(key));

    if (hasFilter) {
      payload = {
        result: {
          action: Actions.FILTER,
          params,
        },
        signal: controller.signal,
      };
    } else {
      setSearchParams({
        page: currentPage.toString(),
        items: itemsPerPage.toString(),
      });
      payload = {
        result: {
          action: Actions.IDS,
          params: {
            offset: (currentPage - 1) * itemsPerPage,
            limit: itemsPerPage,
          },
        },
        signal: controller.signal,
      };
    }

    getProducts(payload);

    return () => controller.abort();
  }, [searchParams, currentPage, itemsPerPage]);

  if (isError) {
    return (
      <div className="wrapper pt-[250px] py-12 flex flex-col gap-3 justify-center items-center h-full ">
        {/* eslint-disable */}
     {/*  @ts-ignore */}
        <div>{error.message}</div>
        <Link
          to="/"
          type="button"
          className="bg-black text-white px-4  py-1 text-sm"
        >
          Return to main page
        </Link>
      </div>
    );
  }
  const gridClass =
    "gap-7 grid justify-items-center  place-items-senter  grid-cols-auto-fill-200";
  const loaderClass = "flex items-center justify-center";

  return (
    <>
      <Filter
        setShowPagination={setShowPagination}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="wrapper pt-[250px] py-12 flex flex-col h-full ">
        <div
          className={`grow pb-20  ${cl({
            [gridClass]: !!data,
            [loaderClass]: !data,
          })}`}
        >
          {data ? (
            data.map((el) => (
              <Card
                svg={getRandomSvg()}
                key={uuidv4()}
                brand={el.brand}
                price={el.price}
                product={el.product}
              />
            ))
          ) : (
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#DDD9D7", "#323232"]}
            />
          )}
        </div>
        {showPagination && (
          <Pagination
            setItemsPerPage={setItemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            overallItems={overallItems}
            visiblePageLimit={5}
          />
        )}
      </div>
    </>
  );
}
