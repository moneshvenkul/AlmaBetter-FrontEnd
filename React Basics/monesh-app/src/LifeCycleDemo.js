import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('🔵 constructor');
  }

  componentDidMount() {
    console.log('🟢 componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('🟡 shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('🟠 componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('🔴 componentWillUnmount');
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('🔁 render');
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default LifecycleDemo;
