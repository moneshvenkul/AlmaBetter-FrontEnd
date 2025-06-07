import React from "react";

function Teacher(WrappedComponent) {
  return class extends React.Component {
    state = { count:0 };

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };      

    render() {
        // Pass count and increment as props to the wrapped component
        return (
            <WrappedComponent
            count={this.state.count}
            increment={this.increment}
            {...this.props}
            />
        );
        }
    }
}
export default Teacher;