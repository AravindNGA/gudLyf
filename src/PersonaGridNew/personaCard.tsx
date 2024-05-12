import PropTypes from "prop-types";

import "./personaCard.css";
import { useNavigate } from "react-router-dom";

const PersonaCard = (props: {
  rootClassName: any;

  pictureSrc: string;
  name: string;
  quote: string;
}) => {
  const navigate = useNavigate();
  const onPersonaClicker = () => {
    let pathTransfer = [props.name, props.quote];
    navigate("/ComplexSelectionCriteria", { state: pathTransfer });
  };
  return (
    <div className={`persona-card-testimonial-card ${props.rootClassName} `}>
      <div className="persona-card-testimonial" onClick={onPersonaClicker}>
        <img
          alt="profile"
          src={props.pictureSrc}
          className="persona-card-image"
        />
        <span className="persona-card-text">{props.name}</span>
        <span className="persona-card-text1">{props.quote}</span>
      </div>
    </div>
  );
};

PersonaCard.defaultProps = {
  pictureAlt: "profile",
  name: "",
  rootClassName: "",
  role: "SOFTWARE ENGINEER",
  quote: "",
  pictureSrc:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200",
};

PersonaCard.propTypes = {
  pictureAlt: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  role: PropTypes.string,
  quote: PropTypes.string,
  pictureSrc: PropTypes.string,
};

export default PersonaCard;
