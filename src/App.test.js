import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Ashokkumar/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
