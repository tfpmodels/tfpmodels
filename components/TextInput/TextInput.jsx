import { Field } from "formik";

const TextInput = ({
  type,
  name,
  label,
  size = "lg",
  className = "",
  style = {},
}) => {
  const fieldWidthOptions = {
    sm: "180px",
    md: "280px",
    lg: "400px",
  };
  const styles = (
    <style jsx global>
      {`
        .textInputContainer {
          display: flex;
          flex-direction: column;
          margin: 20px;
        }
        .textInputLabel {
          display: inline-block;
          margin: auto 10px;
        }
        .textField {
          border-radius: 20px;
          width: ${fieldWidthOptions[size]};
          padding: 10px;
        }
      `}
    </style>
  );
  return (
    <div style={style} className={`textInputContainer ${className}`}>
      {styles}
      {label && <div className="textInputLabel">{label}</div>}
      <Field type={type} name={name} className="textField" />
    </div>
  );
};

export default TextInput;
