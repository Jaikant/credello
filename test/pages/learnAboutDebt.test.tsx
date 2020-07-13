import React from 'react';
import { render } from '../testUtils';
import LearnAboutDebt from '../../pages/LearnAboutDebt';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<LearnAboutDebt />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
