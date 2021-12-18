import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageFromFileUpload } from "../../generics/utils";
import TFPActionBtn from "../TFPActionBtn/TFPActionBtn";

const ImageInputCard = ({
  image,
  ID,
  values,
  setValues,
  imageProp,
  alt = ID,
}) => {
  const [imageSrc, setImageSrc] = useState(image);

  useEffect(() => {
    const file = values.images[imageProp];
    if (file) {
      const onLoadEnd = (e) => setImageSrc(e.target.result);
      getImageFromFileUpload(file, onLoadEnd);
      setValues((values) => ({
        ...values,
        images: {
          ...values.images,
          [imageProp]: file,
        },
      }));
    }
  }, []);

  const onActionBtnClick = () => {
    const fileInputElement = document.getElementById(ID);
    fileInputElement.click();
  };

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    const onLoadEnd = (e) => setImageSrc(e.target.result);
    getImageFromFileUpload(file, onLoadEnd);
    setValues((values) => ({
      ...values,
      images: {
        ...values.images,
        [imageProp]: file,
      },
    }));
  };
  return (
    <div className="d-flex flex-column" style={{ width: "350px" }}>
      <div style={{ width: "100%" }}>
        <Image
          src={imageSrc}
          layout="responsive"
          width={300}
          height={400}
          alt={alt}
        />
      </div>
      <div className="justify-content-center">
        <input
          type="file"
          id={ID}
          style={{ display: "none" }}
          onChange={fileChangeHandler}
        />
        <TFPActionBtn
          onClick={onActionBtnClick}
          label="INSERT PIC"
          className="mx-auto mt-3"
        />
      </div>
    </div>
  );
};

export default ImageInputCard;
