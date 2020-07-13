import React from 'react';
import { render } from '../testUtils';
import CompareProducts from '../../src/components/CompareProducts';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<CompareProducts />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
