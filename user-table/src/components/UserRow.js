const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.country}</td>
      <td>{user.age}</td>
    </tr>
  );
};

export default UserRow;
