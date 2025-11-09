import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/usersSlice";

function Pagination() {
  const dispatch = useDispatch();
  const { filteredUsers, currentPage, itemsPerPage } = useSelector(
    (state) => state.users
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="flex justify-center mt-4 gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => dispatch(setPage(i + 1))}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
