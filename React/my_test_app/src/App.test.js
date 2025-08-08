// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component',()=>{
  render(<App/>);
  const headingElement=screen.getByText(/React With Testing:/i);
  expect(headingElement).toBeInTheDocument();
})
