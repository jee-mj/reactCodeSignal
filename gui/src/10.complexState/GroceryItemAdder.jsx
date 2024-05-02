/* eslint-disable no-unused-vars */
import { useState } from 'react';

function GroceryItemAdder() {
  // TODO: Create a state for the item name with the initial value 'Milk'
  const [name, setName] = useState('Milk');
  // TODO: Create a state for the item quantity with an initial value of 2
  const [qty, setQty] = useState(2);

  // TODO: Write a function to handle doubling the item quantity when an event happens
  function diluteMilkWithWater() {
    setQty(e => e = e + e);
  }

  // TODO: Return a div with the following elements
  // - Section about item name and its quantity
  // - Button element with an event handler that calls the above function
  return (
    <div>
      <section>
        <h2>Item Name</h2>
        <p>{name}</p>
        <h2>Quantity</h2>
        <p>{qty}</p>
      </section>
      <button onClick={() => { diluteMilkWithWater() }}>Ration Milk</button>
    </div>
  );
}

export default GroceryItemAdder;