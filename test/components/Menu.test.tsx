import React from 'react';
import { render } from '../testUtils';
import Menu from '../../src/components/Menu';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Menu />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
