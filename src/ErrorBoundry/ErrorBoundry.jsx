import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorMsg: '' };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({ errorMsg: error });
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>{this.state.errorMsg}</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;