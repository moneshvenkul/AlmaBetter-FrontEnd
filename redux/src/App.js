import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <p style={{ marginTop: '20px' }}>
        This is a simple counter application using Redux for state management.
      </p>
      <p>
        Click the buttons to increment, decrement, or reset the counter value.
      </p>
    </div>
  );
}

export default App;
