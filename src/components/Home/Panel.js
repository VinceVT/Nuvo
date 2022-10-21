import React, { useState } from "react";
import "./index.css";

const StarRating = (props) => {
  const { stars } = props;
  const [rating, setRating] = useState(stars);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            id="star"
            key={index}
            className={index <= rating ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

const Panel = (props) => {
  const { price, description, rating } = props;

  return (
    <div className="panel">
      <div id="smallerDiv">
        <div id="price">${price}</div>
        <div className="text">{description}</div>
        <div id="rating">
          {<StarRating stars={rating.rate} />} {`(${rating.count})`}
        </div>
      </div>
      <div className="addToCart">
        <div>
          <button className="cartButton">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
