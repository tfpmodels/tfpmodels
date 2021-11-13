import Select from "react-select";
import { fieldWidthOptions, TFPSelectsStyles } from "../styles/styles";

const SelectInput = ({
  options,
  label,
  values,
  setValues,
  prop,
  style = {},
  className = "",
  size = "lg",
}) => {
  const onChange = (optionSelected, action) => {
    setValues((values) => ({
      ...values,
      [prop]: optionSelected,
    }));
  };
  return (
    <div
      style={{ margin: "20px 0", width: fieldWidthOptions[size], ...style }}
      className={className}
    >
      {label && <div className="textInputLabel">{label}</div>}
      <Select
        value={values[prop]}
        options={options}
        styles={TFPSelectsStyles}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectInput;
