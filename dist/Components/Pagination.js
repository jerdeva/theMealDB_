import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    if (totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    }
    else {
        if (currentPage < 7) {
            for (let i = 1; i <= 7; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push("...");
            pageNumbers.push(totalPages);
        }
        else if (currentPage >= 7 && currentPage < totalPages - 5) {
            pageNumbers.push(1);
            pageNumbers.push("...");
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push("...");
            pageNumbers.push(totalPages);
        }
        else {
            pageNumbers.push(1);
            pageNumbers.push("...");
            for (let i = totalPages - 6; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }
    }
    return (_jsxs("div", { className: "pagination", children: [_jsx("button", { disabled: currentPage === 1, onClick: () => onPageChange(currentPage - 1), children: "<" }), pageNumbers.map((number, index) => (_jsx("button", { className: number === currentPage ? "active" : "", onClick: () => {
                    if (typeof number === "number") { // Проверка, чтобы onPageChange принимал только число
                        onPageChange(number);
                    }
                }, children: number }, index))), _jsx("button", { disabled: currentPage === totalPages, onClick: () => onPageChange(currentPage + 1), children: ">" })] }));
};
export default Pagination;
