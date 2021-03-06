import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import ModelImage from "../public/images/model.jpg";
import Footer from "../components/Footer/Footer";
import OurModels from "../components/OurModels/OurModels";
import OurLatestNews from "../components/OurLatestNews/OurLatestNews";
// import HomePageVideo from "../public/backgroundVideo.mp4";

export default function Home() {
  // const HomePageVideo = require("../public/videos/homeBackground.mp4");

  const AboutUs = () => {
    return (
      <div className={styles.aboutUsContainer}>
        <div className={styles.infoDiv}>
          <div className={`tfp-title text-center ${styles.title}`}>
            About Our Agency
          </div>
          <div className={styles.content}>
            EST. 2021, TFP is an Egyptian modeling agency aiming to break the
            beauty stereotypes in the modeling industry, and working globally on
            spreading the concept of diversity and inclusivity.
          </div>
          <Link href="/about" passHref>
            <div className={`tfp-btn ${styles.aboutBtn}`}>See More</div>
          </Link>
        </div>
        {/* <div className={styles.imgDiv}>
          <Image src={ModelImage} height="400px" width="320px" alt="model" />
        </div> */}
      </div>
    );
  };

  const ApplySection = () => {
    return (
      <div className={styles.applySection}>
        {/* <div className={styles.contactImage}>
          <Image src={ModelImage} layout="responsive" />
        </div> */}
        <div className={styles.contactContent}>
          <div className="tfp-secondary-title">Join TFP Models</div>
          {/* <Link href="/apply" passHref>
            <div className="tfp-secondary-btn d-inline-block">Apply Here</div>
          </Link> */}
          <Link href="/contact" passHref>
            <div className="tfp-secondary-btn d-inline-block">contact us</div>
          </Link>
        </div>
      </div>
    );
  };

  const BookForShootSection = () => {
    return (
      <div className={styles.bookForShootSection}>
        <div className="text-center">
          <div className="tfp-title p-4">Work With TFP</div>
          {/* <Link href="/" passHref>
            <div className="tfp-btn d-inline-block mx-3">BOOK FOR SHOOT</div>
          </Link> */}
          <Link href="/contact" passHref>
            <div className="tfp-btn d-inline-block mx-3 mb-3">contact us</div>
          </Link>
        </div>
      </div>
    );
  };

  const OurModelsLegend = () => {
    return (
      <div className={styles.legendContainer}>
        <div className={styles.horizontalLine}></div>
        <div className={`tfp-title ${styles.legendTitle} mx-3`}>Our Models</div>
        <div className={styles.horizontalLine}></div>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>TFP Models</title>
        <meta name="description" content="TFP Models Agency" />
        <link rel="icon" href="/tfp-fav-icon.png" />
      </Head>

      <Layout isHomePage={true} headerColor="primary">
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            objectFit: "cover",
            width: "100vw",
            height: "420px",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={"backgroundVideo.mp4"} type="video/mp4" />
          <source src={"backgroundVideo.mp4"} type="video/webm" />
        </video>
        <div className={`${styles.homeContainer}`}>
          <AboutUs />

          <OurModelsLegend />
          <OurModels />

          <ApplySection />
          <BookForShootSection />
          {/* <OurLatestNews /> */}

          <Footer />
        </div>
      </Layout>
    </div>
  );
}
