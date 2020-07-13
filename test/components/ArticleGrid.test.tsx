import React from 'react';
import { render } from '../testUtils';
import ArticleGrid from '../../src/components/ArticleGrid';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ArticleGrid />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
