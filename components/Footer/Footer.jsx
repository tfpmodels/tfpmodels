import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";

import TFP_Logo from "../../public/images/TFP-WHITE-PNG.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  const NavigationLink = ({
    title = "title",
    link = "/",
    isLastLink = false,
  }) => {
    return (
      <div className={`d-flex ${styles.navigationLink}`}>
        <Link href={link}>
          <a>{title}</a>
        </Link>
        {!isLastLink && <div className="mx-2">/</div>}
      </div>
    );
  };

  return (
    <div className={styles.footerContainer}>
      <div className="d-flex justify-content-center">
        <Link href="/">
          <a>
            <Image src={TFP_Logo} alt="TFP-Logo" width={100} height={50} />
          </a>
        </Link>
      </div>

      <div className="d-flex justify-content-center">
        <NavigationLink title="HOME" link="/" />
        <NavigationLink title="ABOUT" link="/about" />
        <NavigationLink title="MODELS" link="/models" />
        <NavigationLink title="CONTACT" link="/contact" isLastLink={true} />
      </div>

      <div className="d-flex justify-content-center color-primary">
        <div className="mx-2 hover-effect">
          <BsWhatsapp />
        </div>
        <div className="mx-2 hover-effect">
          <ImInstagram />
        </div>
        <div className="mx-2 hover-effect">
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default Footer;
