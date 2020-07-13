import React from 'react';
import { render } from '../testUtils';
import PopularCalculators from '../../src/components/PopularCalculators';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<PopularCalculators />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
