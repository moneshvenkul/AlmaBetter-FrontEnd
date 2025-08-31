import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Counter Example</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 10 }}>
        Reset
      </button>
    </div>
  );
}
