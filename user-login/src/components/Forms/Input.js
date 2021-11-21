import styles from "./Input.module.css";

const Input = ({
  id,
  type,
  label,
  value,
  invalid,
  errorMessage,
  valueChangeHandler,
  inputBlurHandler
}) => {
  const inputClasses = invalid
    ? `${styles["input"]} ${styles["input-error"]}`
    : `${styles["input"]}`;

  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles["input-label"]} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputClasses}
        id={id}
        type={type}
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
      />
      {invalid === true && (
        <p className={styles["input-error-message"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
