import { useState } from "react";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ routes }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const menuListClasses = menuOpen
    ? `${styles["menu-list"]} ${styles["menu-list-open"]}`
    : `${styles["menu-list"]}`;

  const menuIconClasses = menuOpen
    ? `${styles["icon"]} ${styles["icon-open"]}`
    : `${styles["icon"]}`;

  return (
    <nav className={styles["container"]}>
      <button onClick={handleMenuClick} className={styles["icon-container"]}>
        <div className={menuIconClasses}></div>
      </button>
      <ul className={menuListClasses}>
        {routes.map((route) => (
          <li className={styles["menu-list-item"]} key={route.pageTitle}>
            {route.pageTitle}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
