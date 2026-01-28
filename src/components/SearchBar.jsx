import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const res = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=7089c330`
    );
    const data = await res.json();
    if (data.Search) {
      onSearch(data.Search);
    } else {
      onSearch([]);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
