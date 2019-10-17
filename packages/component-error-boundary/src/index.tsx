import React from 'react';

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ backgroundColor: 'red' }}>
          <h2>Something went wrong</h2>
          <p>Our engineer team is aware of this issue. </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
