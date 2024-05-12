import PropTypes from "prop-types";

import "./statisticsCard.css";

const StatisticsCard = (props: {
  rootClassName: any;
  count: string | undefined;
  desc: string | undefined;
}) => {
  return (
    <div className={`statistics-card-testimonial-card ${props.rootClassName} `}>
      <div className="statistics-card-testimonial">
        <span className="statistics-card-text">{props.count}</span>
        <span className="statistics-card-text1">{props.desc}</span>
      </div>
    </div>
  );
};

StatisticsCard.defaultProps = {
  rootClassName: "",
  count: "30",
  desc: "We have curated a selection of batteries from various reputable manufacturers to meet your needs.",
};

StatisticsCard.propTypes = {
  rootClassName: PropTypes.string,
  count: PropTypes.string,
  desc: PropTypes.string,
};

export default StatisticsCard;
