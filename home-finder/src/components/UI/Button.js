import styles from "./Button.module.scss";

console.log(styles);

const Button = ({ type = "button", text = "Click me" }) => {
  return (
    <button className={styles["button"]} type={type}>
      {text}
    </button>
  );
};
export default Button;
