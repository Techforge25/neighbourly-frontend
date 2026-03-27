// components/PaginatedList.tsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setPage, setPaginationData } from "../store/paginationSlice";

interface Item {
  id: number;
  name: string;
}

export default function PaginatedList() {
  const dispatch = useDispatch<AppDispatch>();
  const { page, limit, totalPages } = useSelector((state: RootState) => state.pagination);
  const [docs, setDocs] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`/api/data?page=${page}&limit=${limit}`);
      const data = await res.json();
      setDocs(data.docs);
      dispatch(setPaginationData({
        totalPages: data.totalPages,
        totalDocs: data.totalDocs,
        hasNextPage: data.hasNextPage,
        hasPrevPage: data.hasPrevPage,
      }));
      setLoading(false);
    }
    fetchData();
  }, [page, limit, dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {docs.map((doc) => <li key={doc.id}>{doc.name}</li>)}
        </ul>
      )}

      {/* Pagination buttons */}
      <div className="mt-4 flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => dispatch(setPage(page - 1))}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          disabled={page === totalPages}
          onClick={() => dispatch(setPage(page + 1))}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}