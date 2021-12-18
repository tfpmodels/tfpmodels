import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Layout from "../Layout/Layout";
import ApplyFirstSection from "./ApplyFirstSection";
import ApplySecondSection from "./ApplySecondSection";

const ApplyForm = () => {
  const [formSection, setFormSection] = useState(2);

  return (
    <Layout>
      <Formik
        initialValues={{
          fullName: "",
          phoneNumber: {
            country: "Egypt",
            dialCode: "20",
            countryCode: "eg",
            value: "20",
            fullValue: "+20",
          },
          birthDate: "",
          gender: "",
          email: "",
          address: "",
          socialMedia: [""],
          height: "",
          waist: "",
          bust: "",
          hips: "",
          shoeSize: "",
          eyeColor: "",
          hairColor: "",
          images: {
            profile: null,
            headShot: null,
            midLength: null,
            fullLength: null,
          },
        }}
      >
        {(formikProps) => {
          const {
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setValues,
          } = formikProps;
          console.log(`formikProps`, formikProps);

          return (
            <Form>
              {formSection === 1 ? (
                <ApplyFirstSection
                  formikProps={formikProps}
                  setFormSection={setFormSection}
                />
              ) : (
                <ApplySecondSection
                  formikProps={formikProps}
                  setFormSection={setFormSection}
                />
              )}
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default ApplyForm;
