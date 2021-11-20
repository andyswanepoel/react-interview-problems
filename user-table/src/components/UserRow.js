import styles from "./UserTable.module.css";

const UserRow = ({ user }) => {
  return (
    <tr className={styles["user-table-row"]}>
      <td className={styles["user-table-cell"]}>{user.first_name}</td>
      <td className={styles["user-table-cell"]}>{user.last_name}</td>
      <td className={styles["user-table-cell"]}>{user.email}</td>
      <td className={styles["user-table-cell"]}>{user.country}</td>
      <td className={styles["user-table-cell"]}>{user.age}</td>
    </tr>
  );
};

export default UserRow;
