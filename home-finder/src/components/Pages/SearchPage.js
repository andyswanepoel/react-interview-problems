import Section from "../Layout/Section";
import HomeSearch from "../Forms/HomeSearch";

const SearchPage = () => {
  return (
    <>
      <Section>
        <h1 style={{ textAlign: "center" }}>Search for your new home</h1>
        <p style={{ textAlign: "center" }}>
          Use the form below to enter details about your new dream home.
        </p>
      </Section>
      <Section>
        <HomeSearch />
      </Section>
      {/* <Section>
        <HomeSearchResults />
      </Section> */}
    </>
  );
};

export default SearchPage;
