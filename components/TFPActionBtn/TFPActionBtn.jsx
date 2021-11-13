const TFPActionBtn = ({ label, className = "", styles = {}, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={styles}
      className={`TFPActionBtn ${className}`}
    >
      {label}
    </div>
  );
};

export default TFPActionBtn;
