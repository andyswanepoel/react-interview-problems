const cardStyles = {
  width: "50rem",
  maxWidth: "95%",
  margin: "2rem auto",
  padding: "2rem",
  boxShadow: "#26394d 0 2rem 3rem -1rem",
  borderRadius: "2rem",
  border: "0.1rem solid rgba(39, 51, 73, 0.1)",
  backgroundColor: "var(--primary-bg-colour)"
};
const Card = ({ children }) => {
  return <div style={cardStyles}>{children}</div>;
};

export default Card;
