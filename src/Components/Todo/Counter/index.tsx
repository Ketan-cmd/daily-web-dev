import React, { useState, useEffect } from "react";
import "./style.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);



  useEffect(()=>{
    console.log("Counter mounted");
   }, []);

  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <button style={{backgroundColor:"lightgreen"}} onClick={() => setCount(count + 1)}>INC</button>
      <button style={{backgroundColor:"lightcoral"}} onClick={() => setCount(count - 1)}>DEC</button>
    </div>
  );
};

export default Counter;