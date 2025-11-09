import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortUsers } from "../redux/usersSlice";
import { motion } from "framer-motion";

function Table() {
  const dispatch = useDispatch();
  const { filteredUsers, currentPage, itemsPerPage } = useSelector(
    (state) => state.users
  );

  const start = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(start, start + itemsPerPage);

  return (
    <table className="w-full border text-left">
      <thead className="bg-gray-100">
        <tr>
          <th
            className="p-2 cursor-pointer"
            onClick={() => dispatch(sortUsers("name"))}
          >
            Name
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => dispatch(sortUsers("email"))}
          >
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map((user) => (
          <motion.tr
            key={user.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t"
          >
            <td className="p-2">{user.name}</td>

            <td className="p-2">{user.email}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
