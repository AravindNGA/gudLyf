import PropTypes from "prop-types";

import "../PersonaGridNew/testimonialCard.css";

import { useNavigate } from "react-router-dom";

const TestimonialCard1 = (props: {
  rootClassName: any;
  imageAlt: string | undefined;
  pictureSrc: string;
  name: string;
  quote: string;
}) => {
  let navigate = useNavigate();

  const onClickerFunction = () => {
    let pathTransfer = [props.name, props.quote];
    navigate("/commomComplexSelection", { state: pathTransfer });

    console.log(props.name);
  };
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <div
        className="testimonial-card1-testimonial"
        onClick={onClickerFunction}
      >
        <img
          alt={props.imageAlt}
          src={props.pictureSrc}
          className="testimonial-card1-image"
        />
        <span className="testimonial-card1-text">{props.name}</span>
        <span className="testimonial-card1-text1">{props.quote}</span>
      </div>
    </div>
  );
};

TestimonialCard1.defaultProps = {
  imageAlt: "image",
  quote: "Small Description of the item",
  rootClassName: "",
  imageSrc:
    "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F1battery%20CAD.png?alt=media&amp;token=4cce1b88-71bb-48fb-a478-401dd5043731",
  pictureAlt: "profile",
  name: "Battery Heat flow prediction & CFD Analysis",
};

TestimonialCard1.propTypes = {
  imageAlt: PropTypes.string,
  srcImage: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  pictureAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  route: PropTypes.string,
};

export default TestimonialCard1;
