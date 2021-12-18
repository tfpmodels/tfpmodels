import Head from "next/head";

import Layout from "../components/Layout/Layout";
import styles from "../styles/Models.module.scss";

import FIRST_IMAGE from "../public/images/models/1.jpg";
import SECOND_IMAGE from "../public/images/models/2.jpg";
import THIRD_IMAGE from "../public/images/models/3.jpg";
import FOURTH_IMAGE from "../public/images/models/4.jpg";
import FIFTH_IMAGE from "../public/images/models/5.jpg";
import SIXTH_IMAGE from "../public/images/models/6.jpg";
import SEVENTH_IMAGE from "../public/images/models/7.jpg";
import EIGHTH_IMAGE from "../public/images/models/8.jpg";
import ModelCard from "../components/ModelCard/ModelCard";
import PageTitle from "../components/PageTitle";

const Models = () => {
  const imagesArr = [
    FIRST_IMAGE,
    SECOND_IMAGE,
    THIRD_IMAGE,
    FOURTH_IMAGE,
    FIFTH_IMAGE,
    SIXTH_IMAGE,
    SEVENTH_IMAGE,
    EIGHTH_IMAGE,
  ];

  return (
    <div>
      <Head>
        <title>Our Models</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.modelsContainer}>
          <PageTitle title="OUR MODELS" />

          <div className="d-flex flex-wrap justify-content-around">
            {imagesArr.map((image, index) => (
              <div key={index} className={styles.modelCardContainer}>
                <ModelCard image={image} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Models;
