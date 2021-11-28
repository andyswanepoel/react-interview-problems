import SelectInput from "./SelectInput";
import Button from "../UI/Button";
import Card from "../UI/Card";
import useInput from "../../hooks/use-input";

const HomeSearch = ({ updateSearchResults }) => {
  const [
    locationValue,
    locationInputRef,
    locationValueValid,
    locationInputInvalid,
    locationErrorMessage,
    locationValueChangeHandler,
    locationInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select your search location."
    }
  ]);
  const [
    sizeValue,
    sizeInputRef,
    sizeValueValid,
    sizeInputInvalid,
    sizeErrorMessage,
    sizeValueChangeHandler,
    sizeInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select your the size of the property."
    }
  ]);
  const [
    bedValue,
    bedInputRef,
    bedValueValid,
    bedInputInvalid,
    bedErrorMessage,
    bedValueChangeHandler,
    bedInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select the number of bedrooms."
    }
  ]);
  const [
    bathValue,
    bathInputRef,
    bathValueValid,
    bathInputInvalid,
    bathErrorMessage,
    bathValueChangeHandler,
    bathInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select the number of bathrooms."
    }
  ]);
  const [
    parkingValue,
    parkingInputRef,
    parkingValueValid,
    parkingInputInvalid,
    parkingErrorMessage,
    parkingValueChangeHandler,
    parkingInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select whether you require parking."
    }
  ]);

  const queryDatabase = async (filters) => {
    // mock up a connection
    const data = await Promise.resolve(
      JSON.parse(localStorage.getItem("homes"))
    );

    const results = filters.reduce((acc, filter) => {
      if (filter.value === "any") return acc;

      if (["location", "size", "parking"].includes(filter.field)) {
        // For these filters, we're looking for exact matches
        return acc.filter((home) => home[filter.field] === filter.value);
      } else {
        // For these filters, we're looking at least that value
        return acc.filter((home) => home[filter.field] >= filter.value);
      }
    }, data);

    return results;
  };

  // This function will check if the form is valid and will focus the first input that is invalid
  const isFormInvalid = () => {
    const inputs = [
      {
        valid: locationValueValid,
        ref: locationInputRef
      },
      {
        valid: sizeValueValid,
        ref: sizeInputRef
      },
      {
        valid: bedValueValid,
        ref: bedInputRef
      },
      {
        valid: bathValueValid,
        ref: bathInputRef
      },
      {
        valid: parkingValueValid,
        ref: parkingInputRef
      }
    ];

    const firstInvalid = inputs.find((input) => !input.valid);
    if (firstInvalid !== undefined) {
      firstInvalid.ref.current.focus();
    }
    return (
      !locationValueValid ||
      !sizeValueValid ||
      !bedValueValid ||
      !bathValueValid ||
      !parkingValueValid
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // When we submit, we will set that we've interacted with each field via the blurHandler
    locationInputBlurHandler(true);
    sizeInputBlurHandler(true);
    bedInputBlurHandler(true);
    bathInputBlurHandler(true);
    parkingInputBlurHandler(true);

    // If this form is not valid, don't continue
    if (isFormInvalid()) return;

    // These are the query parameters that we'll pass to our DB query
    // If we had a real DB, we could write our query to include this
    const queryParams = [
      {
        field: "location",
        value: locationValue
      },
      {
        field: "size",
        value: sizeValue
      },
      {
        field: "bed",
        value: bedValue
      },
      {
        field: "bath",
        value: bathValue
      },
      {
        field: "parking",
        value: parkingValue
      }
    ];

    try {
      const results = await queryDatabase(queryParams);
      updateSearchResults(results);
    } catch (error) {
      updateSearchResults([]);
    }
  };

  return (
    <Card>
      <h2>Find your dream home</h2>
      <form onSubmit={handleSubmit}>
        <SelectInput
          id="location"
          label="Where would you like to search?"
          placeholder="Select location"
          value={locationValue}
          invalid={locationInputInvalid}
          errorMessage={locationErrorMessage}
          valueChangeHandler={locationValueChangeHandler}
          inputBlurHandler={locationInputBlurHandler}
          options={[
            { displayText: "Any location", value: "any" },
            { displayText: "Toronto, ON", value: "tor" },
            { displayText: "Vancouver, BC", value: "van" },
            { displayText: "Montreal, QC", value: "mon" }
          ]}
          ref={locationInputRef}
        />
        <SelectInput
          id="size"
          label="What property size would you like? (square feet)"
          placeholder="Select size"
          value={sizeValue}
          invalid={sizeInputInvalid}
          errorMessage={sizeErrorMessage}
          valueChangeHandler={sizeValueChangeHandler}
          inputBlurHandler={sizeInputBlurHandler}
          options={[
            { displayText: "Any size", value: "any" },
            { displayText: "0-499", value: "small" },
            { displayText: "500-999", value: "medium" },
            { displayText: "1000+", value: "large" }
          ]}
          ref={sizeInputRef}
        />
        <SelectInput
          id="bed"
          label="How many bedrooms?"
          placeholder="Select bedrooms"
          value={bedValue}
          invalid={bedInputInvalid}
          errorMessage={bedErrorMessage}
          valueChangeHandler={bedValueChangeHandler}
          inputBlurHandler={bedInputBlurHandler}
          options={[
            { displayText: "Any bedrooms", value: "any" },
            { displayText: "1+", value: "1" },
            { displayText: "2+", value: "2" },
            { displayText: "3+", value: "3" }
          ]}
          ref={bedInputRef}
        />
        <SelectInput
          id="bath"
          label="How many bathrooms?"
          placeholder="Select bathrooms"
          value={bathValue}
          invalid={bathInputInvalid}
          errorMessage={bathErrorMessage}
          valueChangeHandler={bathValueChangeHandler}
          inputBlurHandler={bathInputBlurHandler}
          options={[
            { displayText: "Any bathrooms", value: "any" },
            { displayText: "1+", value: "1" },
            { displayText: "2+", value: "2" },
            { displayText: "3+", value: "3" }
          ]}
          ref={bathInputRef}
        />
        <SelectInput
          id="parking"
          label="Do you require parking?"
          placeholder="Select parking"
          value={parkingValue}
          invalid={parkingInputInvalid}
          errorMessage={parkingErrorMessage}
          valueChangeHandler={parkingValueChangeHandler}
          inputBlurHandler={parkingInputBlurHandler}
          options={[
            { displayText: "Show all", value: "any" },
            { displayText: "Yes", value: "true" },
            { displayText: "No", value: "false" }
          ]}
          ref={parkingInputRef}
        />
        <Button type="submit" text="Find your home!" />
      </form>
    </Card>
  );
};

export default HomeSearch;
