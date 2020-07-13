import React from 'react';
import { render } from '../testUtils';
import SectionWithButton from '../../src/components/SectionWithButton';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<SectionWithButton />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
