
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import App from './App';
import Nav from './components/Nav';

describe('Main component', () => {

  test('renders App correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  // test('renders Nav correctly', () => {
  //   const { container } = render(<Nav />);
  //   expect(container).toMatchSnapshot();
  // });

});