import React from 'react';
import { render } from '../testUtils';
import { Home } from '../../pages/index';
import 'jest-styled-components';

describe('Home page', () => {
  it('matches snapshot', () => {
    // const { asFragment } = render(<Footer />, {});
    // expect(asFragment()).toMatchSnapshot();

    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Home />, {})
  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })
});
