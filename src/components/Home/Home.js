import React, { useState, useEffect } from "react";
import Card from "./Card";

import "./index.css";
import Panel from "./Panel";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit${5}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Heading</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        <br />
        architecto neque illum eius error, totam mollitia reiciendis officiis
        <br />
        quis magnam?
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div>
              <div key={item.id} className="subContainer">
                <Card name={item.title} image={item.image} item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
