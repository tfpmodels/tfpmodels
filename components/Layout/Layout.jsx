import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../../styles/Home.module.scss";

const Layout = ({ children, isHomePage = false }) => {
  return (
    <div className={`primary-text-color ${styles.container}`}>
      <Header />
      {children}
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
