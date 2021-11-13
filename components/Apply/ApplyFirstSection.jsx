import { FieldArray } from "formik";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import {
  eyeColorOptions,
  genderOptions,
  hairColorOptions,
} from "../../generics/StaticSelectOptions";
import { colors } from "../../styles/variables";
import DateInput from "../DateInput";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput/TextInput";
import TFPPhoneInput from "../TFPPhoneInput";

const ApplyFirstSection = ({ formikProps, setFormSection }) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setValues,
  } = formikProps;

  const styles = (
    <style jsx global>
      {`
        .sectionNavigationBtn {
          color: ${colors.secondary};
        }
        .sectionNavigationBtn:hover {
          color: ${colors.tertiary};
        }
      `}
    </style>
  );

  const renderSocialMediaArr = (arrayHelpers) => {
    console.log(`arrayHelpers`, arrayHelpers);
    const { form, insert, remove, push } = arrayHelpers;
    const { socialMedia } = form.values;

    const RemoveBtn = ({ index }) => {
      return (
        <div
          role="button"
          className="my-auto mx-2"
          onClick={() => remove(index)}
        >
          <IoMdRemoveCircleOutline />
        </div>
      );
    };
    return (
      <div style={{ borderBottom: "solid 3px black", marginBottom: "20px" }}>
        {styles}
        <div className="tfp-btn mx-2" onClick={() => push("")}>
          ADD SOCIAL MEDIA PROFILE
        </div>
        <div className="d-flex flex-wrap justify-content-start">
          {socialMedia &&
            socialMedia.length > 0 &&
            socialMedia.map((socialMediaLink, index) => (
              <TextInput
                key={index}
                type="text"
                name={`socialMedia.${index}`}
                label="SOCIAL MEDIA"
                className="col-6"
                besideTextField={
                  socialMedia.length > 1 && <RemoveBtn index={index} />
                }
              />
            ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex flex-wrap">
        <TextInput
          className="col-6"
          type="text"
          name="fullName"
          label="FULL NAME"
        />
        <TFPPhoneInput
          className="col-6"
          values={values}
          setValues={setValues}
          prop="phoneNumber"
        />

        <DateInput
          label="DATE OF BIRTH"
          values={values}
          setValues={setValues}
          prop="birthDate"
          className="col-6"
        />
        <SelectInput
          options={genderOptions}
          label="GENDER"
          className="col-6"
          values={values}
          setValues={setValues}
          prop="gender"
        />

        <TextInput className="col-6" type="text" name="email" label="EMAIL" />
        <TextInput
          className="col-6"
          type="text"
          name="address"
          label="ADDRESS"
        />
      </div>

      <FieldArray name="socialMedia" render={renderSocialMediaArr} />

      <div className="d-flex flex-wrap">
        <TextInput
          type="number"
          name="height"
          label="HEIGHT"
          size="md"
          className="mx-3"
        />
        <TextInput
          type="number"
          name="waist"
          label="WAIST"
          size="md"
          className="mx-3"
        />
        <TextInput
          type="number"
          name="bust"
          label="BUST"
          size="md"
          className="mx-3"
        />
        <TextInput
          type="number"
          name="hips"
          label="HIPS"
          size="md"
          className="mx-3"
        />
        <TextInput
          type="number"
          name="shoeSize"
          label="SHOE SIZE"
          size="md"
          className="mx-3"
        />
        <SelectInput
          options={eyeColorOptions}
          label="EYE COLOR"
          values={values}
          setValues={setValues}
          prop="eyeColor"
          size="md"
          className="mx-3"
        />
        <SelectInput
          options={hairColorOptions}
          label="HAIR COLOR"
          values={values}
          setValues={setValues}
          prop="hairColor"
          size="md"
          className="mx-3"
        />
      </div>

      <div className="text-center">
        <div
          onClick={() => setFormSection(2)}
          role="button"
          className="my-5 d-inline-block sectionNavigationBtn"
        >
          MOVE TO STEP <span style={{ fontSize: "40px" }}>2 -&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default ApplyFirstSection;
