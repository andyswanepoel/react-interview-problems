import React from "react";
import styles from "./Section.module.scss";

const Section = ({ children }, ref) => {
  return (
    <section ref={ref} className={styles["section"]}>
      {children}
    </section>
  );
};

export default React.forwardRef(Section);
