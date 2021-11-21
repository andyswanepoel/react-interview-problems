import React from "react";

const ActiveUserContext = React.createContext({
  activeUser: {},
  logIn: () => {},
  logOut: () => {}
});

export default ActiveUserContext;
