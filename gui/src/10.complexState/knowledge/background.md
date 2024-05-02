# Complex State

Lets look at handling complex state, and for this purpose we will also need to be comfortable with splitting state into functional components!

This is an example of encapsulation, not used for security but rather to manipulate data while ensuring separation of concerns.

We 'extend' the usage of `useState` by encapsulating functions in states.

## Understanding Complex State in React

Consider a shopping cart in a full-stack JavaScript application:

```jsx
const [shoppingCart, setShoppingCart] = useState([
  { name: "Apple", quantity: 3, price: 0.5 },
  { name: "Orange", quantity: 2, price: 0.75 },
  // Additional items...
]);
```

We can use the `useState()` hook for managing complex states in functional components.

```jsx
// Adding a new item to our shopping cart
setShoppingCart([...shoppingCart, { name: "Banana", quantity: 1, price: 1 }]);
```

## Understanding when and how to split state in functional components

If the coder comes across situtation where a property is too bulky to be handled as a single state, we can use destructuring to separate away concerns irrelevant to the function.

```jsx
const [itemName, setItemName] = useState("Apple");
const [itemQuantity, setItemQuantity] = useState(3);
const [itemPrice, setItemPrice] = useState(0.5);
```

## Practical Application of Splitting State in Functional Components

We can construct separate states for each form field:

```jsx
const [itemName, setItemName] = useState("");
const [itemQuantity, setItemQuantity] = useState(1);
const [itemPrice, setItemPrice] = useState(1);
```

Upon form submission, we can have a new entry added to the cart:

```jsx
function addItem(event) {
  event.preventDefault();
  setShoppingCart([
    ...shoppingCart,
    { name: itemName, quantity: itemQuantity, price: itemPrice },
  ]);
  setItemName("");
  setItemQuantity(1);
  setItemPrice(1);
}
```

## Capturing Form Data in React

Let's cover handling user input, and updating the component state accordingly.

Each input element can be controlled by state. This makes keeping track of user input straightforward. Every time the user inputs data, an event handler updates the state with the new value. To ensure that we are following SOLID, we will require an individual state for each input (in functional components) with a corresponding function to handle this behaviour.

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
```

A simple function may be:

```jsx
function handleFirstNameChange(event) {
  setFirstName(event.target.value);
}

function handleLastNameChange(event) {
  setLastName(event.target.value);
}
```

The corresponding form:

```jsx
<form>
  <label>
    First Name:
    <input type="text" value={firstName} onChange={handleFirstNameChange} />
  </label>
  <label>
    Last Name:
    <input type="text" value={lastName} onChange={handleLastNameChange} />
  </label>
</form>
```

We make use of the `onChange` property to connect the corresponding function to its field. This ensures that when the value of the `input` field is changed, the corresponding function is called.

