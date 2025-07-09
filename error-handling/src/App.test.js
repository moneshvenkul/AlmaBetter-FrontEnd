import { render, screen } from '@testing-library/react';
import App from './App';

test('render fallback UI when BuggyComponent throws an error', () => {
  render(<App />);
  const fallbackElement = screen.getByText(/monesh/i);
  expect(fallbackElement).toBeInTheDocument();
});
