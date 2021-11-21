const buttonStyles = {
  width: "30rem",
  maxWidth: "95%",
  outline: "none",
  border: "0.2rem solid #456899",
  backgroundColor: "#84afeb",
  height: "3.5rem",
  borderRadius: "0.5rem",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.6rem"
};

const Button = ({ type = "button", text = "Click me" }) => {
  return (
    <button style={buttonStyles} type={type}>
      {text}
    </button>
  );
};
export default Button;
