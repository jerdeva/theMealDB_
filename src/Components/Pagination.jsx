import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  if (totalPages <= 10) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage < 7) {
      for (let i = 1; i <= 7; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (currentPage >= 7 && currentPage < totalPages - 5) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - 6; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {pageNumbers.map((number, index) => (
        <button
          key={index}
          className={number === currentPage ? "active" : ""}
          onClick={() => {
            if (number !== "...") {
              onPageChange(number);
            }
          }}
        >
          {number}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
