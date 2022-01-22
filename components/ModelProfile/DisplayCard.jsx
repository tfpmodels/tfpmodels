import Image from "next/image";

const DisplayCard = ({ images }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 30}`;
  };

  const imagesArr = images.map((image) => {
    console.log(`image`, image);
    return (
      <div style={{ maxWidth: "50%" }} className="mx-2">
        <Image key={image.src} src={image} priority={true} loader={myLoader} />
      </div>
    );
  });
  return <div className="d-flex justify-content-center">{imagesArr}</div>;
};

export default DisplayCard;
