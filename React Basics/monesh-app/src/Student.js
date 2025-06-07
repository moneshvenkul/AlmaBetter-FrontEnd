import Teacher from "./Teacher";

function Student(props) {
  return (
    <div>
      <p>Clicked {props.count} times</p>
      <button onClick={props.increment}>Click me</button>
    </div>
  );
}

export default Teacher(Student);