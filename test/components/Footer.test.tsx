import React from 'react';
import { render } from '../testUtils';
import Footer from '../../src/components/Footer';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
