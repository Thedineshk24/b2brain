import './App.css';
import ErrorBoundary from './ErrorBoundry/ErrorBoundry';
import LayoutB2Brain from './layout/Layout';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <LayoutB2Brain />
      </ErrorBoundary>
    </div>
  );
}

export default App;
