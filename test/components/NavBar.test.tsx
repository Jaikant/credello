import React from 'react';
import { render } from '../testUtils';
import Navbar from '../../src/components/Navbar';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Navbar />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
