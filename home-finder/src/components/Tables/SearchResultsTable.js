import styles from "./Tables.module.scss";

const SearchResultsTable = ({ headers, results }) => {
  //   const [] = useTableSort();
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
                <th className={styles["table-header"]} key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              return (
                <tr key={result.id} className={styles["table-row"]}>
                  <td className={styles["table-cell"]}>
                    {result.city}, {result.province}
                  </td>
                  <td className={styles["table-cell"]}>{result.squarefeet}</td>
                  <td className={styles["table-cell"]}>{result.bed}</td>
                  <td className={styles["table-cell"]}>{result.bath}</td>
                  <td className={styles["table-cell"]}>
                    {result.parking ? "Yes" : "No"}
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
