import React from "react";
import Home from "./components/Home";
import Order from "./components/Order";
import { Routes, Route, Link } from "react-router-dom";

const emptyFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  special: "",
};
const App = () => {
  return (
    <div className="app">
      <h1>Lambda Eats</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="pizza" id="order-pizza">
          Order
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Order />} />
      </Routes>
    </div>
  );
};
export default App;
