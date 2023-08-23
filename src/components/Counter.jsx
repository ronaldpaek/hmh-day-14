import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        &minus;
      </button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default Counter;
