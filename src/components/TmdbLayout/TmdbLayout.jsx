import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navi, Main, Link } from './TmdbLayout.styled';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

function TmdbLayout() {
  return (
    <div>
      <Header>
        <Navi>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navi>
      </Header>
      <Main>
        <ErrorBoundary>
          <Suspense fallback={<div>Please wait...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </Main>
    </div>
  );
}

export default TmdbLayout;
