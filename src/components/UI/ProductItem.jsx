import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/product-item.css";

const ProductItem = (props) => {
  const { imgUrl, productName, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{productName}</h4>
          <h6 className="rent__price text-center mt-">
            Rp. {price}.000 <span>/ Day</span>
          </h6>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/products/${productName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/products/${productName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
