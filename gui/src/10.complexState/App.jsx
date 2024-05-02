/* eslint-disable no-unused-vars */
import { useState } from 'react';

export default function App() {
  // Define a complex state for a fruit object
  // const [fruit, setFruit] = useState({ name: {name}, quantity: {qty}, price: {price} });
  const [name, setName] = useState('Avocado');
  const [qty, setQty] = useState(5);
  const [price, setPrice] = useState(1.5);

  return (
    <div>
      {/* TODO: Don't forget to update this to present correct state variables */}
      <p>Name: {name}</p>
      <p>Quantity: {qty}</p>
      <p>Price: ${price}</p>
    </div>
  );
}