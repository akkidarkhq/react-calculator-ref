import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/Login/Login';

test('login button element ', () => {
  render(<App/>);

  const btnElement = screen.getByText('Login').closest('button')

  // const linkElement = screen.getByText(/Login/i);
  expect(btnElement).toBeInTheDocument();
});
