import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Models } from "../../database/models";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { capitalizeFirstLetter } from "../../generics/utils";
import MainCard from "../../components/ModelProfile/MainCard";
import DisplayCard from "../../components/ModelProfile/DisplayCard";

const ModelProfile = () => {
  const router = useRouter();
  console.log(`router.query`, router.query);
  const { modelNameID } = router.query;

  const [carouselIndex, setCarouselIndex] = useState(0);

  const slideToNext = () => {
    setCarouselIndex((prevIndex) => {
      if (prevIndex === modelCarouselImages.length - 1) return 0;
      else return prevIndex + 1;
    });
  };

  const slideToPrevious = () => {
    setCarouselIndex((prevIndex) => {
      if (prevIndex === 0) return modelCarouselImages.length - 1;
      else return prevIndex - 1;
    });
  };

  const convertModelsDataToIndexedOjb = (modelsData = []) => {
    const indexedObj = {};

    for (let i = 0; i < modelsData.length; i++) {
      const currentModel = modelsData[i];
      const uniqueProperty = `${currentModel.name}${currentModel.id}`;
      indexedObj[uniqueProperty] = currentModel;
    }

    return indexedObj;
  };

  const indexedModelData = convertModelsDataToIndexedOjb(Models);

  const modelIndex = modelNameID.split("-").join("");
  const modelData = indexedModelData[modelIndex];

  console.log(`modelData`, modelData);

  const generateImagesArrToDisplay = (imagesArr) => {
    const imagesArray = [];
    for (let i = 0; i < imagesArr.length; i++) {
      const currentImage = imagesArr[i];
      const indexToPush = Math.floor(i / 2);
      if (!imagesArray[indexToPush]) {
        imagesArray[indexToPush] = [currentImage];
      } else {
        imagesArray[indexToPush].push(currentImage);
      }
    }
    return imagesArray;
  };

  const modelProfileImages = modelData.profileImages.slice(1);

  const profileImagesArr = generateImagesArrToDisplay(modelProfileImages);

  const modelCarouselImages = [
    [modelData.profileImages[0]],
    ...profileImagesArr,
  ];

  const modelName = modelNameID?.split("-")[0];
  const modelNameUpperCase = modelName?.toUpperCase();
  const modelNameFirstLetterCapitalized = capitalizeFirstLetter(modelName);

  console.log(`modelCarouselImages`, modelCarouselImages);

  const ButtonLayout = ({ children, onClick }) => {
    return (
      // <div className="mx-4 py-4 d-flex align-items-end">
      <div
        className={`mx-4 d-flex ${
          carouselIndex === 0 ? "align-items-start mt-5" : "align-items-center"
        } align-items-lg-center`}
      >
        <div role="button" onClick={onClick}>
          {children}
        </div>
      </div>
    );
  };

  const btnSize = "50";

  return (
    <div>
      <Head>
        <title>{`${modelNameFirstLetterCapitalized} by TFP Models Agency`}</title>
        <meta
          name="description"
          content={`${modelNameFirstLetterCapitalized} by TFP Models Agency`}
        />
        <link rel="icon" href="/tfp-fav-icon.png" />
      </Head>

      <Layout>
        <PageTitle title={modelNameUpperCase} />

        <div className="d-flex justify-content-center">
          <ButtonLayout onClick={slideToPrevious}>
            <GrPrevious size={btnSize} />
          </ButtonLayout>
          {carouselIndex === 0 ? (
            <MainCard modelData={modelData} />
          ) : (
            <DisplayCard images={modelCarouselImages[carouselIndex]} />
          )}
          <ButtonLayout onClick={slideToNext}>
            <GrNext size={btnSize} />
          </ButtonLayout>
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ModelProfile;
