import Select from "react-select";
import { TFPSelectsStyles } from "../styles/styles";

const SelectInput = ({ options, label, style = {}, className = "" }) => {
  return (
    <div style={{ margin: "20px", ...style }} className={className}>
      {label && <div className="textInputLabel">{label}</div>}
      <Select options={options} styles={TFPSelectsStyles} />
    </div>
  );
};

export default SelectInput;
