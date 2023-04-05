import "./TitleIs.css";

const TitleIs = (props) => {
  return (
    <div className={`title-is ${props.className || ""}`}>
      <span className="title-is-1">
        {props.titleIs || "Live with Confidence"}
      </span>
    </div>
  );
};
export default TitleIs;
