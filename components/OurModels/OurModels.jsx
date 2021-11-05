import { useState } from "react";
import Image from "next/image";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

import styles from "./OurModels.module.scss";
import FIRST_IMAGE from "../../public/images/models/1.jpg";
import SECOND_IMAGE from "../../public/images/models/2.jpg";
import THIRD_IMAGE from "../../public/images/models/3.jpg";
import FOURTH_IMAGE from "../../public/images/models/4.jpg";
import FIFTH_IMAGE from "../../public/images/models/5.jpg";
import SIXTH_IMAGE from "../../public/images/models/6.jpg";
import SEVENTH_IMAGE from "../../public/images/models/7.jpg";
import EIGHTH_IMAGE from "../../public/images/models/8.jpg";

const OurModels = () => {
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

  console.log("imagesArr", imagesArr);

  let initialShownImagesIndexes = [0, 1, 2, 3];

  const [shownImagesIndexes, setShownImagesIndexes] = useState(
    initialShownImagesIndexes
  );

  const calculateNextIndex = (index, arrayLength) => {
    if (index === arrayLength - 1) return 0;
    else return index + 1;
  };

  const calculateImageIndex = (index, arrayLength, action = "next") => {
    if (action === "next") {
      return calculateNextIndex(index, arrayLength);
    } else {
      if (index === 0) return arrayLength - 1;
      else return index - 1;
    }
  };

  const onImageNavigation = (action) => {
    let firstImage = shownImagesIndexes[0],
      secondImage = shownImagesIndexes[1],
      thirdImage = shownImagesIndexes[2],
      fourthImage = shownImagesIndexes[3];
    firstImage = calculateImageIndex(firstImage, imagesArr.length, action);
    secondImage = calculateNextIndex(firstImage, imagesArr.length);
    thirdImage = calculateNextIndex(secondImage, imagesArr.length);
    fourthImage = calculateNextIndex(thirdImage, imagesArr.length);
    const newImagesArr = [firstImage, secondImage, thirdImage, fourthImage];
    setShownImagesIndexes(newImagesArr);
  };

  const ImageWrapper = ({ imageIndex }) => {
    return (
      <div className={styles.imageWrapper}>
        <Image
          src={imagesArr[imageIndex]}
          height={imagesArr[imageIndex].height}
          width={imagesArr[imageIndex].width}
          layout="responsive"
        />

        <div className={styles.imageInfo}>
          <div>LENGTH: 170</div>
          <div>WEIGHT: 65</div>
          <div>NATIONALITY: EGYPTIAN</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.modelsCarouselContainer}>
        <div
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={() => onImageNavigation("previous")}
        >
          <BiLeftArrowCircle size={60} />
        </div>

        {shownImagesIndexes.map((imageIndex) => (
          <ImageWrapper key={imageIndex} imageIndex={imageIndex} />
        ))}

        <div
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={() => onImageNavigation("next")}
        >
          <BiRightArrowCircle size={60} />
        </div>
      </div>

      <div className="tfp-btn m-auto">SEE MORE</div>
    </div>
  );
};

export default OurModels;
