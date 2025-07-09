import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    console.error('Error caught:', error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops! Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
