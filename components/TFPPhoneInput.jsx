import "react-phone-input-2/lib/style.css";

import PhoneInput from "react-phone-input-2";

const TFPPhoneInput = ({
  values,
  setValues,
  prop = "phoneNumber",
  label = "PHONE NUMBER",
  className = "",
  style = {},
}) => {
  const onPhoneChange = (
    value,
    { name, countryCode, dialCode },
    event,
    fullValue
  ) => {
    setValues((values) => {
      const phoneNumber = {
        country: name,
        dialCode,
        countryCode,
        value,
        fullValue,
      };
      return {
        ...values,
        [prop]: phoneNumber,
      };
    });
  };

  return (
    <div style={{ margin: "20px", ...style }} className={className}>
      <div className="textInputLabel">{label}</div>
      <PhoneInput
        inputProps={{
          name: "phoneNumber",
          value: values.phoneNumber.fullValue,
        }}
        onChange={onPhoneChange}
        placeholder=""
        country="eg"
        buttonStyle={{
          borderCollapse: "collapse",
          backgroundColor: "transparent",
          borderRight: "none",
          border: "none",
        }}
        inputClass="phoneInput"
        containerStyle={{
          border: "solid 2px black",
          borderRadius: "20px",
          padding: "10px",
          width: "400px",
        }}
        dropdownStyle={{
          width: "380px",
        }}
      />
    </div>
  );
};

export default TFPPhoneInput;
