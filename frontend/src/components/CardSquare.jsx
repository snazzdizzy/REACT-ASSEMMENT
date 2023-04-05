import "./CardSquare.css";
import rectangle from "../assets/img/rectangle.svg";


const CardSquare = (props) => {
  return (
    <div className={`card-square ${props.className || ""}`}>
      <div className="card-image">
        <div className="num-1280-x">
          <div className="card-content">
            <img className="rectangle" src={rectangle} />
            <span className="card-title">
              {props.cardTitle || "The Olympian"}
            </span>
            <span className="lorem-ipsum-dolor-sit-amet-conse">
              {props.loremIpsumDolorSitAmetConse ||

                "The only athlete in the world to do her Olympic routine in 2020.              "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSquare;
