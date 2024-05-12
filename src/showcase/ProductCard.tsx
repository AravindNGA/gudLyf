import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = (props: {
  rootClassName: any;
  nameOfCompany: string;
  imgLink: string;
}) => {
  return (
    <div
      className={`product-card-testimonial-card button ${props.rootClassName} `}
    >
      <div className="product-card-product-card">
        <img alt="image" src={props.imgLink} className="product-card-image" />
        <span className="product-card-text">{props.nameOfCompany}</span>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  rootClassName: "",
  nameOfCompany: "24m",
  imgLink: "https://24-m.com/wp-content/themes/blankslate/images/logo.png",
};

ProductCard.propTypes = {
  rootClassName: PropTypes.string,
  nameOfCompany: PropTypes.string,
  imgLink: PropTypes.string,
};

export default ProductCard;
