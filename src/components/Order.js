import React from "react";
import { useState, useEffect } from "react";

function Order(props) {
  const { change, submit } = props;
  const {
    name,
    size,
    topping1,
    topping2,
    topping3,
    topping4,
    topping5,
    topping6,
    topping7,
    special,
  } = props.values;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const newValue = type === "checkbox" ? checked : value;
    change(name, newValue);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  return (
    <div>
      <h1>Build Your Own Pizza</h1>
      {/* img */}
      <form id="pizza-form" onSubmit={onSubmit}>
        <h2>Build Your Own Pizza</h2>
        <div className="name">
          <label htmlFor="name-input">Name: </label>
          <input
            onChange={onChange}
            type="text"
            name="name"
            id="name-input"
            placeholder="Enter Name"
            value={name}
          ></input>
        </div>

        <div className="pizzaSize">
          <h3>Choice of size</h3>
          <p>Required</p>
          <select
            onChange={onChange}
            name="size"
            id="size-dropdown"
            value={size}
          >
            <option value="">-Select A Size-</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </div>
        <div className="toppings">
          <h3>Add Toppings</h3>
          <p>Choose up to 3</p>
          <label htmlFor="pepperoni">Pepperoni</label>
          <input
            onChange={onChange}
            checked={topping1}
            type="checkbox"
            name="topping1"
            value="pepperoni"
            id="pepperoni"
          />
          <label htmlFor="chicken">Chicken</label>
          <input
            onChange={onChange}
            checked={topping2}
            type="checkbox"
            name="topping2"
            value="chicken"
            id="chicken"
          />
          <label htmlFor="pineapple">Pineapple</label>
          <input
            onChange={onChange}
            checked={topping3}
            type="checkbox"
            name="topping3"
            value="pineapple"
            id="pineapple"
          />
          <label htmlFor="mushroom">Mushroom</label>
          <input
            onChange={onChange}
            checked={topping4}
            type="checkbox"
            name="topping4"
            value="mushroom"
            id="mushroom"
          />
          <label htmlFor="peppers">Peppers</label>
          <input
            onChange={onChange}
            checked={topping5}
            type="checkbox"
            name="topping5"
            value="peppers"
            id="peppers"
          />
          <label htmlFor="bacon">Bacon</label>
          <input
            onChange={onChange}
            checked={topping6}
            type="checkbox"
            name="topping6"
            value="bacon"
            id="bacon"
          />
          <label htmlFor="sausage">Sausage</label>
          <input
            onChange={onChange}
            checked={topping7}
            type="checkbox"
            name="topping7"
            value="sausage"
            id="sausage"
          />
        </div>
        <div className="special-instructions">
          <h2>Any Special Request?</h2>
          <p>Enter Below:</p>
          <input
            name="special"
            onChange={onChange}
            type="text"
            id="special-text"
            placeholder="Enter request here"
            value={special}
          ></input>
          <p>May increase price(will call to verify)</p>
        </div>
        <button id="order-button">Place Order</button>
      </form>
    </div>
  );
}

export default Order;
