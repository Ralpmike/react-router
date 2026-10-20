import styles from "../AppBar.module.css";
import { NavLink } from "react-router";

function AppBar() {
  return (
    <header className={styles.App}>
      <nav className={styles.nav}>
        <h1>RouterApp</h1>
        <ul>
          <li>
            <NavLink to="/products">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppBar;
