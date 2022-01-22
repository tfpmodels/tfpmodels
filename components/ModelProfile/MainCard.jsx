import Image from "next/image";

const MainCard = ({ modelData }) => {
  const { source, height, bust, waist, hips, shoe, hair, eye } = modelData;

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 30}`;
  };

  const InfoItem = ({ label, value }) => {
    return (
      <div className="d-flex my-2">
        <div style={{ textAlign: "end" }} className="col-6 mx-2">
          {label}
        </div>
        <div style={{ textAlign: "start" }} className="col-6">
          {value}
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex align-items-center">
      <div className="col-6">
        <InfoItem label="HEIGHT" value={height} />
        <InfoItem label="BUST" value={bust} />
        <InfoItem label="WAIST" value={waist} />
        <InfoItem label="HIPS" value={hips} />
        <InfoItem label="SHOE" value={shoe} />
        <InfoItem label="HAIR" value={hair} />
        <InfoItem label="EYE" value={eye} />
      </div>
      <div className="col-6">
        <Image key={source.src} src={source} loader={myLoader} />
      </div>
    </div>
  );
};

export default MainCard;
