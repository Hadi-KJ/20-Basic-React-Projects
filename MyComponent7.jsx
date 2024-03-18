import React, { useState, useEffect, useRef } from "react";

function MyComponent7() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <br />
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default MyComponent7;
