import { useState } from "react";

const useTableSort = (initialSortKey = "") => {
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [sortAsc, setSortAsc] = useState(true);

  const updateSortKey = (selectedSortKey) => {
    if (sortKey === selectedSortKey) return;

    setSortKey(selectedSortKey);
    setSortAsc(true);
  };

  const updateSortAsc = (selectedSortKey) => {
    if (sortKey !== selectedSortKey) return;

    setSortAsc((currentSortAsc) => !currentSortAsc);
  };

  return [sortKey, sortAsc, updateSortKey, updateSortAsc];
};

export default useTableSort;
