import { useEffect, useState } from "react";
import RegistrationForm from "./components/Forms/RegistrationForm";
import ActiveUserContext from "./store/user-context";
const App = () => {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    if (storedUser !== null) {
      setActiveUser(JSON.parse(storedUser));
    }
  }, []);

  const logIn = (user) => {
    localStorage.setItem("activeUser", JSON.stringify(user));
    setActiveUser(user);
  };

  const logOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser({});
  };

  const activeUserContext = {
    activeUser,
    logIn,
    logOut
  };

  return (
    <ActiveUserContext.Provider value={activeUserContext}>
      <RegistrationForm />
    </ActiveUserContext.Provider>
  );
};

export default App;
