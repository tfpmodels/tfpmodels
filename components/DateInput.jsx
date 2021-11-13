// import "flatpickr/dist/themes/material_green.css";
import "flatpickr/dist/themes/airbnb.css";

import Flatpickr from "react-flatpickr";

const DateInput = ({
  label = "DATE",
  values,
  setValues,
  prop,
  style = {},
  className = "",
}) => {
  const onChange = (date) => {
    setValues((values) => ({
      ...values,
      [prop]: new Date(date),
    }));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 0",
        ...style,
      }}
      className={className}
    >
      {label && <div className="textInputLabel">{label}</div>}
      <Flatpickr
        value={values[prop]}
        className="dateInput"
        onChange={onChange}
        options={{
          dateFormat: "F J, Y",
        }}
      />
    </div>
  );
};

export default DateInput;
