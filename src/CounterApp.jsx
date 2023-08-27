import React, { useState } from "react";
import "./Counter.css";

const CounterApp = () => {
  const [Count, setCount] = useState(0);
  const HandleClick1 = () => {
    setCount(Count + 1);
  };
  const HandleClick2 = () => {
    setCount(Count - 1);
    if (Count <= 0) {
      alert("Negative number");
    }
    
  };

  return (
    <div>
      <div className="Container">
        <div className="Box">
          <div className="Content1">
            <p>Counter App</p>
          </div>
          <div className="Answer">
            <p>{Count}</p>
          </div>
          <div className="Buttons">
            {" "}
            <button onClick={HandleClick1} variant="primary">
              +
            </button>
            <button onClick={HandleClick2} variant="primary">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
