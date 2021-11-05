import Image from "next/image";

import styles from "./ModelCard.module.scss";

const ModelCard = ({ image }) => {
  return (
    <div className={styles.modelCard}>
      <Image src={image} layout="responsive" />

      <div className={styles.cardInfo}>
        <div>LENGTH: 170</div>
        <div>WEIGHT: 65</div>
        <div>NATIONALITY: EGYPTIAN</div>
      </div>
    </div>
  );
};

export default ModelCard;
