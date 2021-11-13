import { Field } from "formik";
import { fieldWidthOptions } from "../../styles/styles";

const TextInput = ({
  type,
  name,
  label,
  size = "lg",
  className = "",
  style = {},
  besideTextField, // react component or node
}) => {
  const styles = (
    <style jsx global>
      {`
        .textInputContainer {
          display: flex;
          flex-direction: column;
          margin: 20px 0;
        }
        .textInputLabel {
          display: inline-block;
          margin: auto 10px;
        }
        .textField {
          border-radius: 20px;
          padding: 10px;
        }
      `}
    </style>
  );
  return (
    <div style={style} className={`textInputContainer ${className}`}>
      {styles}
      {label && <div className="textInputLabel">{label}</div>}
      <div className="d-flex">
        <Field
          type={type}
          name={name}
          className="textField"
          style={{ width: fieldWidthOptions[size] }}
        />
        {besideTextField && besideTextField}
      </div>
    </div>
  );
};

export default TextInput;
