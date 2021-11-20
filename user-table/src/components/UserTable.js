import styles from "./UserTable.module.css";
import UserRow from "./UserRow";
const UserTable = ({
  users,
  updateSortKey,
  updateSortAsc,
  currentSortKey,
  currentSortAsc
}) => {
  const table_headers = [
    { key: "first_name", display_name: "First Name" },
    { key: "last_name", display_name: "Last Name" },
    { key: "email", display_name: "Email" },
    { key: "country", display_name: "Country" },
    { key: "age", display_name: "User Age" }
  ];

  const headerClickHandler = (sort_key) => {
    updateSortKey(sort_key);
    updateSortAsc(sort_key);
  };

  const headerSortingClass = (headerSortKey) => {
    if (headerSortKey !== currentSortKey) return "";

    if (currentSortAsc === true) return styles["sort-ascending"];

    return styles["sort-descending"];
  };

  return (
    <table className={styles["user-table"]}>
      <thead>
        <tr>
          {table_headers.map((header) => (
            <th
              className={`${styles["user-table-header"]} ${headerSortingClass(
                header.key
              )}`}
              key={header.key}
              onClick={() => headerClickHandler(header.key)}
            >
              {header.display_name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
