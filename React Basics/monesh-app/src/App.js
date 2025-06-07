import React, { useState } from "react";

// 1. Click Event - Functional Component
function ClickButton() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Event</button>;
}

// 2. Input Change Event - Functional Component
function InputField() {
  const handleChange = (event) => {
    alert("Input changed: " + event.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Type something"
      style={{ marginLeft: 10 }}
    />
  );
}

// 3. Form Submit with Prevent Default - Functional Component
function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted (preventDefault)!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
      <input placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form>
  );
}

// 4. Event Handler with State Update
function MessageButton() {
  const [message, setMessage] = useState("");
  const handleClick = () => setMessage("Button clicked and state updated!");

  return (
    <div style={{ marginTop: 10 }}>
      <button onClick={handleClick}>State Change on Click</button>
      <span style={{ marginLeft: 10 }}>{message}</span>
    </div>
  );
}

// 5. Event Object Example
function ShowEventDetails() {
  const handleClick = (event) => {
    alert(
      `Element: ${event.target.tagName}, Type: ${event.type}, Mouse X: ${event.clientX}, Y: ${event.clientY}`
    );
  };

  return (
    <button onClick={handleClick} style={{ marginTop: 10 }}>
      Show Event Object Details
    </button>
  );
}

// 6. Event Binding in Class Component (.bind and Arrow Function)
class BindingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // Method 1: Explicit binding in constructor
    this.handleClickBind = this.handleClickBind.bind(this);
  }

  handleClickBind() {
    this.setState({ count: this.state.count + 1 });
    alert("Clicked with .bind(this)");
  }

  // Method 2: Arrow function (auto-binds)
  handleClickArrow = () => {
    this.setState({ count: this.state.count + 1 });
    alert("Clicked with arrow function");
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <button onClick={this.handleClickBind}>Bind Example (.bind)</button>
        <button onClick={this.handleClickArrow} style={{ marginLeft: 10 }}>
          Bind Example (Arrow)
        </button>
        <span style={{ marginLeft: 10 }}>Count: {this.state.count}</span>
      </div>
    );
  }
}

// 7. Event Propagation (Bubbling) Example
function Parent() {
  const handleParentClick = () => {
    alert("Parent div clicked (bubbled)");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{
        border: "2px solid #aaa",
        padding: 10,
        marginTop: 20,
        display: "inline-block",
      }}
    >
      <Child />
    </div>
  );
}

function Child() {
  const handleChildClick = (e) => {
    // Uncomment the next line to stop bubbling!
    // e.stopPropagation();
    alert("Child button clicked");
  };

  return (
    <button style={{ background: "#f0f0f0" }} onClick={handleChildClick}>
      Bubbling Demo (Click Me)
    </button>
  );
}

// ---- MAIN APP ----
export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", margin: 40 }}>
      <h2>React Event Handling Examples (All in One)</h2>
      {/* 1. Click Event */}
      <ClickButton />

      {/* 2. Input Change Event */}
      <InputField />

      {/* 3. Form Submit */}
      <MyForm />

      {/* 4. State Update on Event */}
      <MessageButton />

      {/* 5. Event Object Usage */}
      <ShowEventDetails />

      {/* 6. Event Binding in Class Component */}
      <BindingExample />

      {/* 7. Event Propagation & Bubbling */}
      <Parent />

      <div style={{ marginTop: 40, color: "#666" }}>
        <p>
          <b>Try clicking each button and see the result in alert or on the page.</b>
        </p>
        <p>
          <i>
            <b>Note:</b> In Bubbling Demo, click the button to see both Child and Parent
            alerts. Uncomment <code>e.stopPropagation()</code> in Child to stop
            bubbling.
          </i>
        </p>
      </div>
    </div>
  );
}
