import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

import styles from "./OurModels.module.scss";
import FIRST_IMAGE from "../../public/images/1.jpg";
import SECOND_IMAGE from "../../public/images/2.jpg";
import THIRD_IMAGE from "../../public/images/3.jpg";
import FOURTH_IMAGE from "../../public/images/4.jpg";
import FIFTH_IMAGE from "../../public/images/5.jpg";
import SIXTH_IMAGE from "../../public/images/6.jpg";
import SEVENTH_IMAGE from "../../public/images/7.jpg";
import EIGHTH_IMAGE from "../../public/images/8.jpg";
import NINTH_IMAGE from "../../public/images/9.jpg";
import TENTH_IMAGE from "../../public/images/10.jpg";
import ELEVENTH_IMAGE from "../../public/images/11.jpg";

const OurModels = () => {
  const imagesArr = [
    {
      source: FIRST_IMAGE,
      height: `170cm/5'7"`,
      bust: `89cm/35"`,
      waist: `71cm/28"`,
      hips: `97cm/38"`,
      shoe: "38",
      hair: "Dark Brown",
      eye: "Dark Brown",
    },
    {
      source: SECOND_IMAGE,
      height: `164cm/5'5"`,
      bust: `85cm/33"`,
      waist: `70cm/28"`,
      hips: `98cm/39"`,
      shoe: "37",
      hair: "Blonde/Veiled",
      eye: "Green",
    },
    {
      source: THIRD_IMAGE,
      height: `170cm/5'7"`,
      bust: `85cm/33"`,
      waist: `64cm/25"`,
      hips: `93cm/36"`,
      shoe: "40",
      hair: "Brown",
      eye: "Dark Brown",
    },
    {
      source: FOURTH_IMAGE,
      height: `135cm/5'0"`,
      bust: `74cm/29"`,
      waist: `64cm/25"`,
      hips: `81cm/32"`,
      shoe: "40",
      hair: "Blonde",
      eye: "Hazel Brown",
    },
    {
      source: FIFTH_IMAGE,
      height: `159cm/5'3"`,
      bust: `80cm/31"`,
      waist: `60cm/24"`,
      hips: `80cm/31"`,
      shoe: "38",
      hair: "Black",
      eye: "Grey and Green",
    },
    {
      source: SIXTH_IMAGE,
      height: `166cm/5'5"`,
      bust: `91cm/36"`,
      waist: `68cm/27"`,
      hips: `99cm/39"`,
      shoe: "37",
      hair: "Light Brown",
      eye: "Hazel Brown",
    },
    {
      source: SEVENTH_IMAGE,
      height: `165cm/5'5"`,
      bust: `78cm/30"`,
      waist: `65cm/26"`,
      hips: `91cm/36"`,
      shoe: "38.5",
      hair: "Black",
      eye: "Dark Brown",
    },
    {
      source: EIGHTH_IMAGE,
      height: `166cm/5'5"`,
      bust: `89cm/35"`,
      waist: `76cm/30"`,
      hips: `96cm/38"`,
      shoe: "40",
      hair: "Blonde",
      eye: "Hazel Brown",
    },
    {
      source: NINTH_IMAGE,
      height: `180cm/5'11"`,
      bust: `110cm/43"`,
      waist: `82cm/32"`,
      hips: `112cm/44"`,
      shoe: "42",
      hair: "Light Brown",
      eye: "Green",
    },
    {
      source: TENTH_IMAGE,
      height: `161cm/5'4"`,
      bust: `83cm/33"`,
      waist: `66cm/26"`,
      hips: `93cm/37"`,
      shoe: "38",
      hair: "Dark Brown",
      eye: "Dark Brown",
    },
    {
      source: ELEVENTH_IMAGE,
      height: `164cm/5'5"`,
      bust: `66cm/26"`,
      waist: `58cm/23"`,
      hips: `93cm/37"`,
      shoe: "36",
      hair: "Auburn/Veiled",
      eye: "Dark Brown",
    },
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
          src={imagesArr[imageIndex].source}
          height={imagesArr[imageIndex].source.height}
          width={imagesArr[imageIndex].source.width}
          layout="responsive"
        />

        <div className={styles.imageInfo}>
          <div>Height: {imagesArr[imageIndex].height}</div>
          <div>Bust: {imagesArr[imageIndex].bust}</div>
          <div>Waist: {imagesArr[imageIndex].waist}</div>
          <div>Hips: {imagesArr[imageIndex].hips}</div>
          <div>Shoe: {imagesArr[imageIndex].shoe}</div>
          <div>Hair: {imagesArr[imageIndex].hair}</div>
          <div>Eye: {imagesArr[imageIndex].eye}</div>
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
