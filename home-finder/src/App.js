import { useEffect } from "react";
import Header from "./components/Navigation/Header";
import SearchPage from "./components/Pages/SearchPage";
import { homes } from "./database";

function App() {
  useEffect(() => {
    // In the absence of a real database, I'll just store the homes in localStorage and query that
    localStorage.setItem("homes", JSON.stringify(homes));
  }, []);

  return (
    <>
      <Header />
      <SearchPage />
    </>
  );
}

export default App;
