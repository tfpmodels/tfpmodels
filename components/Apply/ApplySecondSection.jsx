import PageTitle from "../PageTitle";
import styles from "./Apply.module.scss";
import ImageInputCard from "./ImageInputCard";
import ModelImage from "../../public/images/model.jpg";

const ApplySecondSection = ({ formikProps, setFormSection }) => {
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
      <div className="text-center">
        <div
          onClick={() => setFormSection(1)}
          role="button"
          className={`my-2 d-inline-block ${styles.sectionNavigationBtn}`}
        >
          <span style={{ fontSize: "40px" }}>&lt;-</span> MOVE TO STEP{" "}
          <span style={{ fontSize: "40px" }}>1</span>
        </div>
      </div>

      <PageTitle title={TITLE} />

      <div style={{ margin: "auto 100px" }}>
        <ol type="1">
          <li>MAKE SURE YOU WEAR NO MAKEUP</li>
          <li>NO NEED FOR PROFESSIONAL PHOTOS</li>
          <li>FOLLOW THE COMING SHOTS</li>
        </ol>
      </div>

      <div className="row">
        <ImageInputCard
          image={ModelImage}
          ID="profileIMG"
          alt="Profile Image"
          values={values}
          setValues={setValues}
          imageProp="profile"
        />
        <ImageInputCard
          image={ModelImage}
          ID="headShotIMG"
          alt="Head Shot Image"
          values={values}
          setValues={setValues}
          imageProp="headShot"
        />
        <ImageInputCard
          image={ModelImage}
          ID="midLengthIMG"
          alt="Mid Length Image"
          values={values}
          setValues={setValues}
          imageProp="midLength"
        />
        <ImageInputCard
          image={ModelImage}
          ID="fullLengthIMG"
          alt="Full Length Image"
          values={values}
          setValues={setValues}
          imageProp="fullLength"
        />
      </div>
    </div>
  );
};

export default ApplySecondSection;
