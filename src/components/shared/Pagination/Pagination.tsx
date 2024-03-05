import React, { FC } from "react";
import Link from "next/link";
import { SmallText } from "../SmallText";

interface PaginationProps {
  currentPage: number;
  rowsPerPage: number;
  totalPages: number;
  numberOfItems: number;
  path: string;
  onPageChange: () => void;
}

export const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  const {
    numberOfItems,
    currentPage,
    rowsPerPage,
    totalPages,
    path,
    onPageChange,
  } = props;

  return (
    <div className="flex justify-center items-center ">
      <SmallText text={`${numberOfItems} elementos`} className="mr-[8px]" />
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index;
        if (
          pageNumber === 0 ||
          pageNumber === totalPages - 1 ||
          (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
        ) {
          return (
            <Link
              href={`${path}?offset=${index * rowsPerPage}&limit=${rowsPerPage}`}
              key={index}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === pageNumber
                  ? "bg-primary rounded-full px-1 py-0.5 text-white"
                  : ""
              }`}
              onClick={onPageChange}
            >
              {pageNumber + 1}
            </Link>
          );
        } else if (
          (pageNumber === 1 && currentPage > 4) ||
          (pageNumber === totalPages - 2 && currentPage < totalPages - 3)
        ) {
          return <span key={index}>...</span>;
        }
      })}
      {totalPages > 5 && currentPage < totalPages - 2 && <span>...</span>}
      {totalPages > 5 && (
        <Link
          href={`${path}?offset=${totalPages * rowsPerPage}&limit=${rowsPerPage}`}
          className={`px-2 py-1 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-primary rounded-full px-1 py-0.5 text-white"
              : ""
          }`}
          onClick={onPageChange}
        >
          {Math.floor(totalPages + 1)}
        </Link>
      )}
    </div>
  );
};
