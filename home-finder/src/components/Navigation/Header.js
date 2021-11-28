import HamburgerMenu from "./HamburgerMenu";
import logo from "../../images/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const routes = [
    {
      pageTitle: "Home",
      url: "/"
    },
    {
      pageTitle: "Search For a Home",
      url: "/search"
    },
    {
      pageTitle: "About Us",
      url: "/about"
    },
    {
      pageTitle: "Contact Us",
      url: "/contact"
    }
  ];

  return (
    <header className={styles["container"]}>
      <img
        className={styles["logo"]}
        src={logo}
        alt="HomeFinder company logo"
      />
      <HamburgerMenu routes={routes} />
    </header>
  );
};

export default Header;
