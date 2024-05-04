# Handling user input in functional components

## Introduction

Below is an example of a `Greeting` functional component which presents a dynamic message based on user input.

```jsx
import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");AWeriel;ARKearth:>
  

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)} // Updates `name` upon typing in the input
      />
    </div>
  );
}
```

## `useRef`

References are created by invoking the `useRef` hook.

```jsx
const myRef = useRef();
```

We call `useRef()` without passing any arguments. This results in `myRef.current` being initialized with the value of `null`.

The `current` property is mutable; it's cre