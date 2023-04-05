import TitleIs from "./components/TitleIs";
import Button from "react-bootstrap/Button";

const Header = () => {
  const propsData = {
    titleIs1: {
      titleIs: "Live with Confidence",
    },
    btnPrimary: {
      active: true,
      variant: "success",
      size: "lg",
      children: "View project",
    },
  };
  return (
    <div className="hero">
      <div className="hero-image">
        <TitleIs className="title-is-1-instance-1" {...propsData.titleIs1} />
        <span className="jos-mourinho-brings-confidence-t">
          José Mourinho brings confidence to pan-African Sanlam<br></br> campaign.
        </span>
        <Button className="btn-primary-banner" {...propsData.btnPrimary} />
      </div>
    </div>
  );
};
export default Header;