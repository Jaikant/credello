import React from 'react';
import { render } from '../testUtils';
import ManageDebt from '../../src/components/ManageDebt';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ManageDebt />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
