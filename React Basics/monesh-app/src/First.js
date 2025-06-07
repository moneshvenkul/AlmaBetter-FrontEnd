import Second from './Second';

function First(props) {
  return (
    <div>
      <p>Clicked {props.count} times</p>
      <button onClick={props.increment}>Click me</button>
    </div>
  );
}

export default Second(First); // Export the enhanced component
