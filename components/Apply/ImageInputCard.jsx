import Image from "next/image";
import TFPActionBtn from "../TFPActionBtn/TFPActionBtn";

const ImageInputCard = ({ image, ID, values, setValues, imageProp }) => {
  console.log(`image`, image);
  const onActionBtnClick = () => {
    const fileInputElement = document.getElementById(ID);
    fileInputElement.click();
  };

  const fileChangeHandler = (event) => {
    console.log(`event`, event);
    const file = event.target.files[0];
    setValues((values) => ({
      ...values,
      images: {
        ...values.images,
        [imageProp]: file,
      },
    }));
    console.log(`file`, file);
  };
  return (
    <div className="d-flex flex-column" style={{ width: "400px" }}>
      <div style={{ width: "100%" }}>
        <Image src={image} layout="responsive" />
      </div>
      <div className="justify-content-center">
        <input type="file" id={ID} onChange={fileChangeHandler} />
        <TFPActionBtn
          onClick={onActionBtnClick}
          label="INSERT PIC"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default ImageInputCard;
