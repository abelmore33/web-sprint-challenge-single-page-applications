import React from "react";
import Home from "./components/Home";
import Order from "./components/Order";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const emptyFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  topping7: false,
  special: "",
};

const App = () => {
  const [formValues, setFormValues] = useState(emptyFormValues);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };
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
        <Route
          path="pizza"
          element={<Order values={formValues} change={handleChange} />}
        />
      </Routes>
    </div>
  );
};
export default App;
