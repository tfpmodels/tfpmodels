import Image from "next/image";

import styles from "./ModelCard.module.scss";

const ModelCard = ({ model }) => {
  return (
    <div className={styles.modelCard}>
      <Image key={model.source.src} src={model.source} layout="responsive" />

      <div className={styles.cardInfo}>
        <div>Height: {model.height}</div>
        <div>Bust: {model.bust}</div>
        <div>Waist: {model.waist}</div>
        <div>Hips: {model.hips}</div>
        <div>Shoe: {model.shoe}</div>
        <div>Hair: {model.hair}</div>
        <div>Eye: {model.eye}</div>
      </div>
    </div>
  );
};

export default ModelCard;
