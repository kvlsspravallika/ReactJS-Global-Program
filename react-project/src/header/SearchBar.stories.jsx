import React from "react";
import SearchBar from "./SearchBar";

export default {
  title: "Header/SearchBar",
  component: SearchBar,
};

const onSearch = (query) => {
  alert(`Search triggered for: ${query}`);
};

export const Default = () => <SearchBar onSearch={onSearch} />;

export const WithInitialQuery = () => (
  <SearchBar initialQuery="Avengers" onSearch={onSearch} />
);

export const EmptyInitialQuery = () => (
  <SearchBar initialQuery="" onSearch={onSearch} />
);

export const LongInitialQuery = () => (
  <SearchBar initialQuery={"A very long search query that exceeds normal length to test overflow handling in the input field."} onSearch={onSearch} />
);

export const CustomOnSearch = () => (
  <SearchBar onSearch={query => console.log(`Custom search: ${query}`)} />
);

export const EnterKeySearch = () => (
  <>
    <p style={{textAlign: "center"}}>Type a query and press <b>Enter</b> to trigger search.</p>
    <SearchBar onSearch={onSearch} />
  </>
);
