import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';
import { multiplyByThree, resetMultiply } from './redux/multiplyCounterSlice';

function App() {
  const count = useSelector((state) => state.counter);
  const multiplyCount = useSelector((state) => state.multiplyCounter);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <h1 style={{ marginTop: '40px' }}>Multiply Counter by 3 every time: {multiplyCount}</h1>
      <button onClick={() => dispatch(multiplyByThree())}>Multiply by 3</button>
      <button onClick={() => dispatch(resetMultiply())}>Reset Multiply</button>
      <p style={{ marginTop: '20px' }}>
        This is a simple counter application using Redux for state management.
      </p>
      <p>
        Click the buttons to increment, decrement, or reset the counter value.<br/>
        Use the multiply counter to multiply by 3 each time.
      </p>
    </div>
  );
}

export default App;
