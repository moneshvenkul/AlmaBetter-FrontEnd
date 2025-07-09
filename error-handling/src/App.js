import './App.css';
import ErrorBoundary from './ErrorBoundary';

const BuggyComponent = () => {
  throw new Error('I crashed!');
};

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default App;
