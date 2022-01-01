import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import TFP_Logo from "../../public/images/TFP.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className="d-flex justify-content-between my-4 ">
      <Link href="/">
        <a>
          <Image src={TFP_Logo} alt="TFP-Logo" width={100} height={50} />
        </a>
      </Link>

      <div className="d-flex">
        <div className="mx-4 d-flex flex-wrap">
          <Link href="/">
            <a className={styles.headerNavLink}>Home</a>
          </Link>
          <Link href="/about">
            <a className={styles.headerNavLink}>About</a>
          </Link>
          <Link href="/models">
            <a className={styles.headerNavLink}>Models</a>
          </Link>
          <Link href="/contact">
            <a className={styles.headerNavLink}>Contact</a>
          </Link>
        </div>

        {/* <div role="button">
          <BsSearch size="30" fontWeight="bold" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
