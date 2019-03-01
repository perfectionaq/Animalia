import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasError) {
      return <h3>An error has occurred.</h3>;
    }
    
    return this.props.children;
  }
}

export { ErrorBoundary };