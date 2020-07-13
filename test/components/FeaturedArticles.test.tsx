import React from 'react';
import { render } from '../testUtils';
import FeaturedArticles from '../../src/components/FeaturedArticles';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<FeaturedArticles />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
