import React from "react";
import { useDispatch } from "react-redux";
import { searchUsers } from "../redux/usersSlice";

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => dispatch(searchUsers(e.target.value))}
      className="border p-2 rounded w-full mb-4"
    />
  );
}

export default SearchBar;
