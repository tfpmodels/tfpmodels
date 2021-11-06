import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import DateInput from "../DateInput";
import Layout from "../Layout/Layout";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput/TextInput";
import TFPPhoneInput from "../TFPPhoneInput";

const ApplyForm = () => {
  const [formSection, setFormSection] = useState(1);

  const genderOptions = [
    { label: "MALE", value: "male" },
    { label: "FEMALE", value: "female" },
  ];

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
              <div className="d-flex">
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
              </div>

              <div className="d-flex">
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
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default ApplyForm;
