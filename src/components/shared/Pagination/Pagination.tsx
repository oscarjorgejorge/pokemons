import Link from "next/link";
import React from "react";
import { SmallText } from "../SmallText";
import { defaultApiParams } from "@/core/interfaces/api_response";
// import { SmallText } from "../SmallText";
// import { Link, useNavigate } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  rowsPerPage: number;
  totalPages: number;
  numberOfItems: number;
  path: string;
}

export const Pagination: React.FC<PaginationProps> = (
  props: PaginationProps,
) => {
  const { numberOfItems, currentPage, rowsPerPage, totalPages, path } = props;

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
                  ? "text-primary border border-primary rounded-sm px-1 py-0.5"
                  : ""
              }`}
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
              ? "text-primary border border-primary rounded-sm px-1 py-0.5"
              : ""
          }`}
        >
          {Math.floor(totalPages + 1)}
        </Link>
      )}
    </div>
  );
};
