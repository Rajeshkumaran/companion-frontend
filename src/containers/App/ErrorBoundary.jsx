import React from 'react';
import { Stack } from '@fluentui/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidUpdate(prevProps, _previousState) {
    if (!this.props.hasError && prevProps.hasError) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(_error, _errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? <Stack>Something went wrong</Stack> : this.props.children;
  }
}

export default ErrorBoundary;
