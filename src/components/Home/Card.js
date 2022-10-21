import React, { useState } from "react";
import Panel from "./Panel";
import "./index.css";

const Card = (props) => {
  const { name, image, item } = props;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div className="box">
      <div className="card">
        <img src={image} />
        <div className="itemName">{name}</div>
        <button
          onClick={handleToggle}
          className={toggle ? "round-button" : "round-buttonWhite"}
        >
          {toggle ? ">" : "<"}
        </button>
      </div>
      <div
        className="panel"
        style={{ visibility: toggle ? "visible" : "hidden" }}
      >
        <Panel
          price={item.price}
          description={item.description}
          rating={item.rating}
        />
      </div>
    </div>
  );
};

export default Card;
