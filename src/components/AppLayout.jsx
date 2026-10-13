import { Outlet } from "react-router";
import AppBar from "./AppBar";
import Footer from "./Footer";
import styles from "../AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.App}>
      <AppBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
