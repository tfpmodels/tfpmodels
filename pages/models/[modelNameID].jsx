import { useRouter } from "next/router";
import { Models } from "../../database/models";

const ModelProfile = () => {
  const router = useRouter();
  const { modelNameID } = router.query;

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

  console.log(`modelCarouselImages`, modelCarouselImages);

  return <p>Post: {modelNameID}</p>;
};

export default ModelProfile;
