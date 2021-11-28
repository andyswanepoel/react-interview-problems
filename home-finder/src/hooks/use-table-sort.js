import { useState } from "react";

const useTableSort = (initialSortKey = "") => {
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [sortAsc, setSortAsc] = useState(true);

  const updateSortKey = (selectedSortKey) => {
    console.log("selectedSortKey: ");
    console.log(selectedSortKey);
    if (sortKey === selectedSortKey) return;

    setSortKey(selectedSortKey);
    setSortAsc(true);
  };

  const updateSortAsc = (selectedSortKey) => {
    console.log("selectedSortKey: ");
    console.log(selectedSortKey);
    if (sortKey !== selectedSortKey) return;

    setSortAsc((currentSortAsc) => !currentSortAsc);
  };

  return [sortKey, sortAsc, updateSortKey, updateSortAsc];
};

export default useTableSort;
