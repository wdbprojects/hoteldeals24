"use client";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";

interface PaginationProps {
  resPerPage: number;
  filteredRoomsCount: number;
  roomsCount: number;
}

const PaginationComp = ({
  resPerPage,
  filteredRoomsCount,
  roomsCount,
}: PaginationProps) => {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  let queryParams: URLSearchParams;
  const router = useRouter();
  useEffect(() => {
    setTotalPages(Math.ceil(roomsCount / resPerPage));
  }, [resPerPage, roomsCount]);
  if (!searchParams) {
    return <Loading />;
  }

  let page = searchParams.get("page") || 1;
  page = Number(page);

  const handlePageChange = (currentPage: string) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      if (queryParams.has("page")) {
        queryParams.set("page", currentPage);
      } else {
        queryParams.append("page", currentPage);
      }
    }
    const path = `${window.location.pathname}?${queryParams.toString()}`;
    router.push(path);
  };

  const length = 5;

  const totalPagesArray = Array.from({ length: totalPages }, (_, index) => {
    return index;
  });

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/?page=${currentPage - 1}`}
              onClick={handlePrevPage}
            />
          </PaginationItem>
        )}
        {totalPagesArray.map((pageItem, index) => {
          return (
            <PaginationItem key={index}>
              <PaginationLink
                href={`/?page=${pageItem + 1}`}
                isActive={pageItem === page - 1 ? true : false}
                onClick={() => {
                  setCurrentPage(pageItem + 1);
                }}
              >
                {pageItem + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/*  <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`/?page=${currentPage + 1}`}
              onClick={handleNextPage}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComp;
