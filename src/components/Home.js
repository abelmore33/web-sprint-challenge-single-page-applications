import React from "react";
import homeImg from "../images/pizza.jpg";

function Home() {
  return (
    <div>
      <img
        src={homeImg}
        alt="pizza"
        style={{ width: "100%", height: "800px" }}
      />
      <button id="orderButton">Order Now</button>
    </div>
  );
}

export default Home;
