import PropTypes from "prop-types";

import "./CriteriaSelectionCard.css";

const CriteriaSelectionCard = (props: {
  rootClassName: any;
  heading: string;
  selectedValue: string;
}) => {
  return (
    <div
      className={`criteria-selection-card-testimonial-card ${props.rootClassName} `}
    >
      <div className="criteria-selection-card-testimonial">
        <span className="criteria-selection-card-text">{props.heading}</span>
        <span className="criteria-selection-card-text1">
          {props.selectedValue}
        </span>
      </div>
    </div>
  );
};

CriteriaSelectionCard.defaultProps = {
  rootClassName: "",
  selectedValue: "Selected Battery Type",
  heading: "Selected Battery Type",
};

CriteriaSelectionCard.propTypes = {
  rootClassName: PropTypes.string,
  selectedValue: PropTypes.string,
  heading: PropTypes.string,
};

export default CriteriaSelectionCard;
