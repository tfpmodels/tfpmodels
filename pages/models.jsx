import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Models as ModelsData } from "../database/models";

import Layout from "../components/Layout/Layout";
import styles from "../styles/Models.module.scss";

import ModelCard from "../components/ModelCard/ModelCard";
import PageTitle from "../components/PageTitle";

const Models = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Our Models</title>
        <meta name="description" content="TFP Models Agency" />
        <link rel="icon" href="/tfp-fav-icon.png" />
      </Head>

      <Layout>
        <div className={styles.modelsContainer}>
          <PageTitle title="OUR MODELS" />

          <div className="d-flex flex-wrap justify-content-around">
            {ModelsData.map((model, index) => (
              // <Link href={`${router.asPath}/${model.name}-${model.id}`}>
              <Link
                href={{
                  pathname: "models/[modelNameID]",
                  query: { modelNameID: `${model.name}-${model.id}` },
                }}
                key={model.id}
                passHref
              >
                <div key={index} className={styles.modelCardContainer}>
                  <ModelCard model={model} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Models;
