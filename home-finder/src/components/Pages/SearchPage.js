import Section from "../Layout/Section";
import HomeSearch from "../Forms/HomeSearch";
import SearchResultsTable from "../Tables/SearchResultsTable";
import { useState } from "react";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInitiated, setsearchInitiated] = useState(false);

  const updateSearchResults = (newResults) => {
    if (searchInitiated === false) setsearchInitiated(true);
    setSearchResults(newResults);
  };

  return (
    <>
      <Section>
        <h1 style={{ textAlign: "center" }}>Search for your new home</h1>
        <p style={{ textAlign: "center" }}>
          Use the form below to enter details about your new dream home.
        </p>
      </Section>
      <Section>
        <HomeSearch updateSearchResults={updateSearchResults} />
      </Section>
      {searchInitiated === true && (
        <Section>
          {searchResults.length === 0 && (
            <p style={{ textAlign: "center" }}>
              No results found. Please update your criteria or try again later.
            </p>
          )}
          {searchResults.length > 0 && (
            <SearchResultsTable
              headers={[
                { displayText: "Location", key: "city" },
                { displayText: "Size (sqft)", key: "squarefeet" },
                { displayText: "Bedrooms", key: "bed" },
                { displayText: "Bathrooms", key: "bath" },
                { displayText: "Parking", key: "parking" }
              ]}
              results={searchResults}
            />
          )}
        </Section>
      )}
    </>
  );
};

export default SearchPage;
