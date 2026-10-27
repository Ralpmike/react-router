import { Outlet, useNavigate } from "react-router";
import AppBar from "./AppBar";
import Footer from "./Footer";
import styles from "../AppLayout.module.css";
import { useProducts } from "../helper/useProducts";
import { useEffect } from "react";

function AppLayout() {
  const { user } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);


  console.log(user)

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
