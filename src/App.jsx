import React from "react";
import './App.css';
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-10">
<h1 className="text-2xl font-bold text-center mb-4">Mini Dashboard</h1>
      <SearchBar />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
