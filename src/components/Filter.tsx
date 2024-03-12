import React, { useEffect, useState } from "react";
import cl from "classnames";
import { useSearchParams } from "react-router-dom";
import CustomCheckbox from "./CustomCheckbox";

type FilterType = {
  isFilterOpen: boolean;
  setShowPagination: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

export default function Filter({
  isFilterOpen,
  setIsFilterOpen,
  setShowPagination,
  setCurrentPage,
}: FilterType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    ""
  );
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text");
  const categories = ["price", "product", "brand"] as const;


    useEffect(() => {
      const category = categories.find((category) =>
        searchParams.has(category)
      );
      if (category) {
        setSelectedCategory(category);
        setInputValue(searchParams.get(category) || "");
        setInputType(category === "price" ? "number" : "text");
      } else {
        setSelectedCategory("");
        setInputValue("");
        setInputType("text");
      }
    }, [searchParams]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (selectedCategory && inputValue.trim() !== "") {
      
        setSearchParams({ [selectedCategory]: inputValue });
        setCurrentPage(1);
        setShowPagination(false);
      } else {
        setSearchParams({});
        setShowPagination(true);
      }
    };


  const handleCheckboxChange = (
    category: (typeof categories)[number] | undefined
  ) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      setInputValue("");
      setInputType("text");
      setSearchParams({});
       setCurrentPage(1);
       setShowPagination(true);
    } else {
      setSelectedCategory(category);
      setInputType(category === "price" ? "number" : "text");
      setInputValue("");

    }
  };



  return (
    <>
      <div
        className={` fixed top-0 h-[100px] bg-cremaDark w-full transition-all shadow-[0_0_60px_0_rgba(0,0,0,0.3)] z-[9] ${cl(
          { "top-[152px]": isFilterOpen }
        )} `}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-start w-full h-full z-[9]"
        >
          <div className="flex flex-col items-center justify-center gap-2 w-full h-full text-sm z-[9]">
            <div className="flex items-center justify-center gap-2">
              {categories.map((category) => (
                <CustomCheckbox
                  key={category}
                  name={category}
                  checked={selectedCategory === category}
                  onChange={() => handleCheckboxChange(category)}
                />
              ))}
            </div>
            <input
              type={inputType}
              value={inputValue}
              disabled={!selectedCategory}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-[2px] px-1 border-2 border-black outline-none "
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white p-[3px] w-[273px] text-sm"
          >
            Save
          </button>
        </form>
      </div>
      <div
        className={` fixed w-full top-[147px] transition-all z-[9]  ${cl({
          slide: isFilterOpen,
        })} `}
      >
        <div
          className={`leverage z-[8]`}
          onClick={() => setIsFilterOpen((prev) => !prev)}
        ></div>
        <div
          className={`leverage-text select-none text-sm  z-[9]`}
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          Filters
        </div>
      </div>
    </>
  );
}

