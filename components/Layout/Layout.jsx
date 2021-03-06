import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../../styles/Home.module.scss";

const Layout = ({
  children,
  isHomePage = false,
  headerColor = "secondary",
}) => {
  return (
    <div className={`primary-text-color px-0 px-lg-4 ${styles.container}`}>
      <Header color={headerColor} />
      {children}
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
