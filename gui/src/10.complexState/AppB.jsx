import { useState } from 'react';

export default function App() {
  const [itemName, setItemName] = useState('');

  function handleItemChange(event) {
    setItemName(event.target.value);
  }

  return (
    <form>
      <label>
        Item Name:
        <input type="text" value={itemName} onChange={handleItemChange} />
      </label>
    </form>
  );
}