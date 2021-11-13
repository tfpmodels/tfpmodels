import PageTitle from "../PageTitle";
import styles from "./Apply.module.scss";
import ImageInputCard from "./ImageInputCard";
import ModelImage from "../../public/images/model.jpg";

const ApplySecondSection = ({ formikProps }) => {
  const TITLE = "TIME TO TAKE A PHOTO !";
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setValues,
  } = formikProps;

  return (
    <div className={styles.applySecondSection}>
      <PageTitle title={TITLE} />

      <div style={{ margin: "auto 100px" }}>
        <ol type="1">
          <li>MAKE SURE YOU WEAR NO MAKEUP</li>
          <li>NO NEED FOR PROFESSIONAL PHOTOS</li>
          <li>FOLLOW THE COMING SHOTS</li>
        </ol>
      </div>

      <div>
        <ImageInputCard
          image={ModelImage}
          ID="randomID"
          values={values}
          setValues={setValues}
          imageProp="profile"
        />
      </div>
    </div>
  );
};

export default ApplySecondSection;
