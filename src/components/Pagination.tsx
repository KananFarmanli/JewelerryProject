import React from "react";
import cl from "classnames";
import { v4 as uuidv4 } from "uuid";
import CustomSelect from "./CustomSelect";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  visiblePageLimit?: number;
  itemsPerPage: number;
  overallItems: number;
  pageClass?: string;
  activePageClass?: string;
  controlBtnClass?: string;
  disabledControlBtnClass?: string;
  pageWrapperClass?: string;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  setItemsPerPage,
  visiblePageLimit = 5,
  itemsPerPage,
  overallItems,
  pageClass = "",
  activePageClass = "text-white bg-black",
  controlBtnClass = "",
  disabledControlBtnClass = "text-neutral-400 hover:bg-white hover:text-neutral-400",
  pageWrapperClass = "",
}: PaginationProps) {
  const totalPages = Math.ceil(overallItems / itemsPerPage);
  const generalClass =
    " py-1 px-2 transition-all border-[1px] text-primary border-crema hover:bg-black hover:text-white ";
  const generatePageNumbers = () => {
    const pages: (string | number)[] = [];
    let startPage, endPage;

    if (totalPages <= visiblePageLimit) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(visiblePageLimit / 2);
      const maxPagesAfterCurrentPage = Math.ceil(visiblePageLimit / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = visiblePageLimit;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - visiblePageLimit + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center text-sm select-none ${pageWrapperClass}`}
    >
      <ul
        className={`flex gap-2 justify-center items-center text-sm select-none `}
      >
        {currentPage > 1 && (
          <li
            className={cl(`${generalClass} ${controlBtnClass}`, {
              [disabledControlBtnClass]: currentPage === 1,
            })}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            prev
          </li>
        )}
        {pages.map((page) => (
          <li
            key={uuidv4()}
            className={cl(`${generalClass} ${pageClass}`, {
              [activePageClass]: page === currentPage,
            })}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
          >
            {page}
          </li>
        ))}
        {currentPage < totalPages && (
          <li
            className={cl(`${generalClass} ${controlBtnClass}`, {
              [disabledControlBtnClass]: currentPage === totalPages,
            })}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            next
          </li>
        )}
      </ul>
      <div className="flex gap-1 justify-center items-center">
        <span className="font-bold">Items per page</span>:
        <CustomSelect
          options={[5, 15, 25, 50]}
          selectedOption={itemsPerPage}
          setSelectedOption={setItemsPerPage}
        />
      </div>
    </div>
  );
}
