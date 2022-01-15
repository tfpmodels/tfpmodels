import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import { Models } from "../../database/models";

import styles from "./OurModels.module.scss";

const OurModels = () => {
  console.log("Models", Models);

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
    firstImage = calculateImageIndex(firstImage, Models.length, action);
    secondImage = calculateNextIndex(firstImage, Models.length);
    thirdImage = calculateNextIndex(secondImage, Models.length);
    fourthImage = calculateNextIndex(thirdImage, Models.length);
    const newImagesArr = [firstImage, secondImage, thirdImage, fourthImage];
    setShownImagesIndexes(newImagesArr);
  };

  const ImageWrapper = ({ imageIndex }) => {
    return (
      <div className={styles.imageWrapper}>
        <Image
          src={Models[imageIndex].source}
          height={Models[imageIndex].source.height}
          width={Models[imageIndex].source.width}
          layout="responsive"
        />

        <div className={styles.imageInfo}>
          <div>Length: {Models[imageIndex].height}</div>
          <div>Bust: {Models[imageIndex].bust}</div>
          <div>Waist: {Models[imageIndex].waist}</div>
          <div>Hips: {Models[imageIndex].hips}</div>
          <div>Shoe: {Models[imageIndex].shoe}</div>
          <div>Hair: {Models[imageIndex].hair}</div>
          <div>Eye: {Models[imageIndex].eye}</div>
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

      <Link href="/models">
        <div className="tfp-btn m-auto">See More</div>
      </Link>
    </div>
  );
};

export default OurModels;
