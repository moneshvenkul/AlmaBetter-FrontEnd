import React, { useState, useMemo } from 'react';

function FactorialComponent() {
  const [num, setNum] = useState(5);
  const [text, setText] = useState('');

  const factorial = useMemo(()=>calculateFactorial(num),[num]); // runs every time

  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(+e.target.value)} />
      <p>Factorial: {factorial}</p>

      <input placeholder="Type something" value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}

function calculateFactorial(n) {
  console.log('Calculating...');
  if (n <= 0) return 1;
  return n * calculateFactorial(n - 1);
}
export default FactorialComponent;