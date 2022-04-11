import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const loadNumber = async () => {
      const res = await fetch("http://localhost:5080/api/random");
      const data = await res.json();
      setRandomNumber(data.randomNumber);
    };

    loadNumber();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{randomNumber}</h1>
    </div>
  );
}

export default App;
