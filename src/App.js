import ErrorBoundary from './ErrorBoundry/ErrorBoundry';
import LayoutB2Brain from './layout/Layout';

function App() {
  return (
      <ErrorBoundary>
        <LayoutB2Brain />
      </ErrorBoundary>
  );
}

export default App;
