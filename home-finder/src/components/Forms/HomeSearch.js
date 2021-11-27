import SelectInput from "./SelectInput";
import Button from "../UI/Button";
import Card from "../UI/Card";
import useInput from "../../hooks/use-input";

const HomeSearch = () => {
  const [
    locationValue,
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
    bedroomValue,
    bedroomInputInvalid,
    bedroomErrorMessage,
    bedroomValueChangeHandler,
    bedroomInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select the number of bedrooms."
    }
  ]);
  const [
    bathroomValue,
    bathroomInputInvalid,
    bathroomErrorMessage,
    bathroomValueChangeHandler,
    bathroomInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select the number of bathrooms."
    }
  ]);
  const [
    parkingValue,
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

  return (
    <Card>
      <h2>Find your dream home</h2>
      <form>
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
            { displayText: "Toronto", value: "tor" },
            { displayText: "Vancouver", value: "van" },
            { displayText: "Montreal", value: "mon" }
          ]}
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
            { displayText: "0-499", value: "small" },
            { displayText: "500-999", value: "medium" },
            { displayText: "1000+", value: "large" }
          ]}
        />
        <SelectInput
          id="bedrooms"
          label="How many bedrooms?"
          placeholder="Select bedrooms"
          value={bedroomValue}
          invalid={bedroomInputInvalid}
          errorMessage={bedroomErrorMessage}
          valueChangeHandler={bedroomValueChangeHandler}
          inputBlurHandler={bedroomInputBlurHandler}
          options={[
            { displayText: "1+", value: "1" },
            { displayText: "2+", value: "2" },
            { displayText: "3+", value: "3" }
          ]}
        />
        <SelectInput
          id="bathrooms"
          label="How many bathrooms?"
          placeholder="Select bathrooms"
          value={bathroomValue}
          invalid={bathroomInputInvalid}
          errorMessage={bathroomErrorMessage}
          valueChangeHandler={bathroomValueChangeHandler}
          inputBlurHandler={bathroomInputBlurHandler}
          options={[
            { displayText: "1+", value: "1" },
            { displayText: "2+", value: "2" },
            { displayText: "3+", value: "3" }
          ]}
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
            { displayText: "Yes", value: "true" },
            { displayText: "No", value: "false" }
          ]}
        />
        <Button type="submit" text="Find your home!" />
      </form>
    </Card>
  );
};

export default HomeSearch;
