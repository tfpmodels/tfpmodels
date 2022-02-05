import Image from "next/image";
import styles from "./ModelProfile.module.scss";

const DisplayCard = ({ images }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 30}`;
  };

  const imagesArr = images.map((image) => {
    console.log(`image`, image);
    return (
      <div
        key={image.src}
        // style={{ maxWidth: "50%" }}
        className={`mx-2 ${styles.displayCard}`}
      >
        <Image key={image.src} src={image} priority={true} loader={myLoader} />
      </div>
    );
  });
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-center">
      {imagesArr}
    </div>
  );
};

export default DisplayCard;
