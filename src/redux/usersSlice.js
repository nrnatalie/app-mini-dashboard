import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/usersData";

const initialState = {
  allUsers: users,
  filteredUsers: users,
  sortBy: null,
  currentPage: 1,
  itemsPerPage: 5,
  searchQuery: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchUsers: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredUsers = state.allUsers.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.currentPage = 1;
    },
    sortUsers: (state, action) => {
      state.sortBy = action.payload;
      state.filteredUsers.sort((a, b) =>
        a[action.payload].localeCompare(b[action.payload])
      );
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { searchUsers, sortUsers, setPage } = usersSlice.actions;
export default usersSlice.reducer;
