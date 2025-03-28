import React from "react";

/**
 * ErrorBoundary component
 *
 * Use this to wrap external or fragile components like:
 * - Google Maps (Map.jsx)
 *
 * This prevents the whole app from crashing in case those components fail.
 * Instead, it shows a friendly fallback message.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // When an error is thrown in a child, update the state
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Log the error
  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-sm text-secondary text-center mt-4 italic opacity-80">
          ⚠️{" "}
          {this.props.fallback ||
            "Something went wrong loading this section. Please try again later"}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
