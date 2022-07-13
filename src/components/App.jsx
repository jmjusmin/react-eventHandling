import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  function isClick() {
    setHeading("Summitted");
  }

  const [mouse, setMouse] = useState(false);
  function isMouseOver() {
    setMouse(true);
  }
  function isMouseOut() {
    setMouse(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouse ? "black" : "white" }}
        onClick={isClick}
        onMouseOver={isMouseOver}
        onMouseOut={isMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
