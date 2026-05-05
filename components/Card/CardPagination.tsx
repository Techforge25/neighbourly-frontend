import { setPage } from "@/store/paginationSlice";
import { useDispatch } from "react-redux";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  isLoading: boolean;
}

const CardPagination = ({
  page,
  totalPages,
  hasNextPage,
  hasPrevPage,
  isLoading,
}: Props) => {
  const dispatch = useDispatch();

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const btnBase =
    "flex items-center cursor-pointer gap-1 rounded-full border border-modal-line bg-white font-medium font-outfit text-textdark shadow-sm transition-all duration-200 hover:border-secondary hover:text-secondary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-modal-line disabled:hover:text-textdark";

  return (
    <div className="mt-8 pb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2">
      {/* ── Mobile: Prev / Page X of Y / Next ── */}
      <div className="flex items-center gap-3 sm:hidden w-full justify-between px-4">
        <button
          disabled={!hasPrevPage || isLoading}
          onClick={() => dispatch(setPage(page - 1))}
          className={`${btnBase} px-3 py-2 text-xs`}
        >
          <MdKeyboardArrowLeft size={16} />
          Prev
        </button>

        <span className="text-sm font-semibold font-outfit text-textdark">
          {page} / {totalPages}
        </span>

        <button
          disabled={!hasNextPage || isLoading}
          onClick={() => dispatch(setPage(page + 1))}
          className={`${btnBase} px-3 py-2 text-xs`}
        >
          Next
          <MdKeyboardArrowRight size={16} />
        </button>
      </div>

      {/* ── Tablet / Desktop: full pagination ── */}
      <div className="hidden sm:flex items-center gap-2">
        {/* Prev */}
        <button
          disabled={!hasPrevPage || isLoading}
          onClick={() => dispatch(setPage(page - 1))}
          className={`${btnBase} px-4 py-2 text-sm`}
        >
          <MdKeyboardArrowLeft size={18} />
          Prev
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {pages.map((p) => {
            const isActive = p === page;

            const showPage =
              p === 1 ||
              p === totalPages ||
              p === page ||
              p === page - 1 ||
              p === page + 1;

            const showLeftDot = p === page - 2 && page > 3;
            const showRightDot = p === page + 2 && page < totalPages - 2;

            if (showLeftDot || showRightDot) {
              return (
                <span key={p} className="px-1 text-para text-sm select-none">
                  ...
                </span>
              );
            }

            if (!showPage) return null;

            return (
              <button
                key={p}
                onClick={() => dispatch(setPage(p))}
                disabled={isLoading}
                className={`w-9 h-9 cursor-pointer rounded-full text-sm font-semibold font-outfit transition-all duration-200 disabled:cursor-not-allowed ${
                  isActive
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-white border border-modal-line text-textdark hover:border-secondary hover:text-secondary"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          disabled={!hasNextPage || isLoading}
          onClick={() => dispatch(setPage(page + 1))}
          className={`${btnBase} px-4 py-2 text-sm`}
        >
          Next
          <MdKeyboardArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CardPagination;
