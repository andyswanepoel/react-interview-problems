import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const sortedUsers = users.sort((a, b) => {
    if (a[sortKey] < b[sortKey]) {
      return sortAsc ? -1 : 1;
    }
    if (a[sortKey] > b[sortKey]) {
      return sortAsc ? 1 : -1;
    }
    return 0;
  });

  const updateSortKey = (selectedSortKey) => {
    console.log(selectedSortKey);
    if (sortKey === selectedSortKey) return;

    setSortKey(selectedSortKey);
    setSortAsc(true);
  };

  const updateSortAsc = (selectedSortKey) => {
    if (sortKey !== selectedSortKey) return;

    setSortAsc((currentSortAsc) => !currentSortAsc);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        setUsers(
          data.results.map((user) => {
            return {
              id: user.login.uuid,
              first_name: user.name.first,
              last_name: user.name.last,
              email: user.email,
              country: user.location.country,
              age: user.dob.age,
              thumbnail: user.picture.thumbnail,
              user_image: user.picture.large
            };
          })
        );
      });
  }, []);

  return (
    <div>
      {users.length === 0 && <p>No users found!</p>}
      {users.length > 0 && (
        <UserTable
          users={sortedUsers}
          updateSortKey={updateSortKey}
          updateSortAsc={updateSortAsc}
          currentSortKey={sortKey}
          currentSortAsc={sortAsc}
        />
      )}
    </div>
  );
};

export default App;
