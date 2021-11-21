import Input from "./Input";
import Button from "../UI/Button";
import Card from "../UI/Card";

import useInput from "../../hooks/use-input";

const RegistrationForm = () => {
  const [
    firstNameValue,
    firstNameInputInvalid,
    firstNameErrorMessage,
    firstNameValueChangeHandler,
    firstNameInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your first name."
    }
  ]);
  const [
    lastNameValue,
    lastNameInputInvalid,
    lastNameErrorMessage,
    lastNameValueChangeHandler,
    lastNameInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your last name."
    }
  ]);
  const [
    userNameValue,
    userNameInputInvalid,
    userNameErrorMessage,
    userNameValueChangeHandler,
    userNameInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter a username."
    }
  ]);
  const [
    emailAddressValue,
    emailAddressInputInvalid,
    emailAddressErrorMessage,
    emailAddressValueChangeHandler,
    emailAddressInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter an email address."
    },
    {
      test: (value) =>
        value
          .trim()
          .match(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
      error: "Please enter a valid email address."
    }
  ]);
  const [
    passwordValue,
    passwordInputInvalid,
    passwordErrorMessage,
    passwordValueChangeHandler,
    passwordInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter a password."
    },
    {
      test: (value) => value.trim().length >= 10,
      error: "Password must be more than 10 characters."
    }
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    firstNameInputBlurHandler(true);
    lastNameInputBlurHandler(true);
    userNameInputBlurHandler(true);
    emailAddressInputBlurHandler(true);
    passwordInputBlurHandler(true);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <Input
          id="first_name"
          type="text"
          label="First Name"
          value={firstNameValue}
          invalid={firstNameInputInvalid}
          errorMessage={firstNameErrorMessage}
          valueChangeHandler={firstNameValueChangeHandler}
          inputBlurHandler={firstNameInputBlurHandler}
        />
        <Input
          id="last_name"
          type="text"
          label="Last Name"
          value={lastNameValue}
          invalid={lastNameInputInvalid}
          errorMessage={lastNameErrorMessage}
          valueChangeHandler={lastNameValueChangeHandler}
          inputBlurHandler={lastNameInputBlurHandler}
        />
        <Input
          id="user_name"
          type="text"
          label="User Name"
          value={userNameValue}
          invalid={userNameInputInvalid}
          errorMessage={userNameErrorMessage}
          valueChangeHandler={userNameValueChangeHandler}
          inputBlurHandler={userNameInputBlurHandler}
        />
        <Input
          id="email_address"
          type="email"
          label="Email Address"
          value={emailAddressValue}
          invalid={emailAddressInputInvalid}
          errorMessage={emailAddressErrorMessage}
          valueChangeHandler={emailAddressValueChangeHandler}
          inputBlurHandler={emailAddressInputBlurHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          value={passwordValue}
          invalid={passwordInputInvalid}
          errorMessage={passwordErrorMessage}
          valueChangeHandler={passwordValueChangeHandler}
          inputBlurHandler={passwordInputBlurHandler}
        />
        <Button type="submit" text="Submit" />
      </form>
    </Card>
  );
};

export default RegistrationForm;
