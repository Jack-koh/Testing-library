import React, { useState } from "react";

function Pointer() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}

export default Pointer;
