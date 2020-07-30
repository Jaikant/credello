import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { device } from 'libs/device';

type Props = {
  bg?: string;
  width?: string;
  mt?: string;
};

export const StyledButton = styled(Button)<Props>`
  &.MuiButton-contained {
    padding: 18px;
    background: ${({ bg }) => (bg ? bg : '#fff')};
    width: ${({ width }) => (width ? width : ' ')};
    margin-top: ${({ mt }) => (mt ? mt : ' ')};
    text-transform: none;
    letter-spacing: 0.14px;
    &.Mui-disabled {
      background: #85a3b8;
    }
  }
  &.MuiButton-contained:hover {
    background: #85a3b8;
  }
  &.MuiButton-contained:hover.Mui-disabled {
    background: #85a3b8;
  }
  @media ${device.tablet} {
    max-width: 400px;
  }
  @media ${device.laptop} {
    max-width: 400px;
  }
`;
