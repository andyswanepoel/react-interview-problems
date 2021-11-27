import styles from "./SelectInput.module.scss";

const SelectInput = ({
  id,
  label,
  placeholder,
  value,
  invalid,
  errorMessage,
  valueChangeHandler,
  inputBlurHandler,
  options
}) => {
  const inputClasses = invalid
    ? `${styles["input"]} ${styles["input-error"]}`
    : `${styles["input"]}`;

  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles["input-label"]} htmlFor={id}>
        {label}
      </label>
      <select
        className={inputClasses}
        id={id}
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.displayText}
            </option>
          );
        })}
      </select>
      {invalid === true && (
        <p className={styles["input-error-message"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectInput;
