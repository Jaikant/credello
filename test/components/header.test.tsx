import React from 'react';
import { render } from '../testUtils';
import Header from '../../src/components/Header';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
