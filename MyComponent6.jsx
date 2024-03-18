import React, { useState, useEffect } from "react";
function MyComponent6() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //by using without useEffect, we call alot addEventListenet which is bad
  // so we use useEffect to call eventlisterner once
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    document.title = `Size: ${width} * ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </>
  );
}

export default MyComponent6;
