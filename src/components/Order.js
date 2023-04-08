import React from "react";

function Order() {
  return (
    <div>
      <h1>Build Your Own Pizza</h1>
      {/* img */}
      <form id="pizza-form">
        <h2>Build Your Own Pizza</h2>
        <div className="name">
          <label htmlFor="name-input">Name: </label>
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Enter Name"
          ></input>
        </div>

        <div className="pizzaSize">
          <h3>Choice of size</h3>
          <p>Required</p>
          <select name="pizza" id="size-dropdown">
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
            type="checkbox"
            name="topping"
            value="pepperoni"
            id="pepperoni"
          />
          <label htmlFor="chicken">Chicken</label>
          <input type="checkbox" name="topping" value="chicken" id="chicken" />
          <label htmlFor="pineapple">Pineapple</label>
          <input
            type="checkbox"
            name="topping"
            value="pineapple"
            id="pineapple"
          />
          <label htmlFor="mushroom">Mushroom</label>
          <input
            type="checkbox"
            name="topping"
            value="mushroom"
            id="mushroom"
          />
          <label htmlFor="peppers">Peppers</label>
          <input type="checkbox" name="topping" value="peppers" id="peppers" />
          <label htmlFor="bacon">Bacon</label>
          <input type="checkbox" name="topping" value="bacon" id="bacon" />
          <label htmlFor="pepperoni">sausage</label>
          <input type="checkbox" name="topping" value="sausage" id="sausage" />
        </div>
        <div className="special-instructions">
          <h2>Any Special Request?</h2>
          <p>Enter Below:</p>
          <input
            type="text"
            id="special-text"
            placeholder="Enter request here"
          ></input>
          <p>May increase price(will call to verify)</p>
        </div>
      </form>
    </div>
  );
}

export default Order;
