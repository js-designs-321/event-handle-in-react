import React from "react";

function App() {
  const [color, setColor] = React.useState("White");

  function setWhite() {
    setColor("White");
  }

  function setBlack() {
    setColor("Black");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color }}
        onMouseOut={setWhite}
        onMouseOver={setBlack}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
