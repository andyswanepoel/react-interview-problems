import useTableSort from "../../hooks/use-table-sort";
import styles from "./Tables.module.scss";

const SearchResultsTable = ({ headers, results }) => {
  const [
    resultsTableSortKey,
    resultsTableSortAsc,
    resultsTableUpdateSortKey,
    resultsTableUpdateSortAsc
  ] = useTableSort();

  var formatCurrency = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0
  });

  const sortedResults = results.sort((a, b) => {
    const value1 = isNaN(a[resultsTableSortKey])
      ? a[resultsTableSortKey]
      : parseInt(a[resultsTableSortKey]);
    const value2 = isNaN(b[resultsTableSortKey])
      ? b[resultsTableSortKey]
      : parseInt(b[resultsTableSortKey]);
    if (value1 < value2) {
      return resultsTableSortAsc ? -1 : 1;
    }
    if (value1 > value2) {
      return resultsTableSortAsc ? 1 : -1;
    }
    return 0;
  });

  const resultsTableHandleSortUpdate = (selectedSortKey) => {
    resultsTableUpdateSortKey(selectedSortKey);
    resultsTableUpdateSortAsc(selectedSortKey);
  };

  const resultsTableHeaderSortingClass = (headerSortKey) => {
    if (headerSortKey !== resultsTableSortKey) return "";

    if (resultsTableSortAsc === true) return styles["sort-ascending"];

    return styles["sort-descending"];
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Your Search Results</h2>
      <p style={{ textAlign: "center" }}>
        You can sort the results by clicking on the column header.
      </p>
      <div className={styles["table-container"]}>
        <table className={styles["table"]}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  onClick={() => resultsTableHandleSortUpdate(header.key)}
                  className={`${
                    styles["table-header"]
                  } ${resultsTableHeaderSortingClass(header.key)}`}
                  key={header.key}
                >
                  {header.displayText}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((result) => {
              return (
                <tr key={result.id} className={styles["table-row"]}>
                  <td className={styles["table-cell"]}>
                    {result.city}, {result.province}
                  </td>
                  <td className={styles["table-cell"]}>{result.squarefeet}</td>
                  <td className={styles["table-cell"]}>{result.bed}</td>
                  <td className={styles["table-cell"]}>{result.bath}</td>
                  <td className={styles["table-cell"]}>
                    {result.parking === "true" ? "Yes" : "No"}
                  </td>
                  <td className={styles["table-cell"]}>
                    {formatCurrency.format(result.price)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchResultsTable;
