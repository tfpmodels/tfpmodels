import Image from "next/image";

import styles from "./ModelCard.module.scss";

const ModelCard = ({ image }) => {
  return (
    <div className={styles.modelCard}>
      <Image src={image.source} layout="responsive" />

      <div className={styles.cardInfo}>
        <div>Height: {image.height}</div>
        <div>Bust: {image.bust}</div>
        <div>Waist: {image.waist}</div>
        <div>Hips: {image.hips}</div>
        <div>Shoe: {image.shoe}</div>
        <div>Hair: {image.hair}</div>
        <div>Eye: {image.eye}</div>
      </div>
    </div>
  );
};

export default ModelCard;
