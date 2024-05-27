export default function Search(search, setSearch, handleSearch) {
  return (
    <div className="search-engine">
      <input
        type="text"
        name="search"
        className="city-search"
        placeholder="Enter a city name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
}
