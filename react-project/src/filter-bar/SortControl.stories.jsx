import React, { useState } from "react";
import SortControl from "./SortControl";

export default {
  title: "Filter Bar/SortControl",
  component: SortControl,
};

export const Default = () => (
  <SortControl currentSelection="releaseDate" onSortChange={() => {}} />
);

export const TitleSelected = () => (
  <SortControl currentSelection="title" onSortChange={() => {}} />
);

export const Interactive = () => {
  const [sort, setSort] = useState("releaseDate");
  return <SortControl currentSelection={sort} onSortChange={setSort} />;
};

export const NoSelection = () => (
  <SortControl currentSelection="" onSortChange={() => {}} />
);

// Custom options not supported by current implementation, so not included.

