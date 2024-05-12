import PropTypes from "prop-types";

import "../components/card.css";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Card = (props: {
  rootClassName: any;
  text:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  text1:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <div className="card-info">
        <span className="card-text">{props.text}</span>
        <span className="card-text1">{props.text1}</span>
      </div>
    </div>
  );
};

Card.defaultProps = {
  text1:
    "GudLyf provides invaluable insights and resources to battery designers, aiding in the development of innovative and efficient battery solutions.",
  rootClassName: "",
  text: "CAD Designer",
};

Card.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
