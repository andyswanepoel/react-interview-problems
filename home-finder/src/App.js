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
    // Would wrap this in some UserContext if a user was logged in to show different content or customization
    <>
      <Header />
      {/* Could use some sort of routing here to show different pages */}
      <SearchPage />
    </>
  );
}

export default App;
