import React from "react";
import styles from "./SelectInput.module.scss";

const SelectInput = (
  {
    id,
    label,
    placeholder,
    value,
    invalid,
    errorMessage,
    valueChangeHandler,
    inputBlurHandler,
    options
  },
  ref
) => {
  const inputClasses = invalid
    ? `${styles["input"]} ${styles["input-error"]}`
    : `${styles["input"]}`;

  const ariaLabels = invalid
    ? { "aria-invalid": "true", "aria-describedby": `error-${id}` }
    : {};

  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles["input-label"]} htmlFor={id}>
        {label}
      </label>
      <select
        ref={ref}
        className={inputClasses}
        id={id}
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        {...ariaLabels}
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
        <p id={`error-${id}`} className={styles["input-error-message"]}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default React.forwardRef(SelectInput);
