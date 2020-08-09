import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { device } from 'libs/device';
import { TextBold } from 'components/Typography';

type Props = {
  bg?: string;
  width?: string;
  mt?: string;
};

export const StyledButton = styled(Button)<Props>`
  &.MuiButton-contained {
    padding: 18px;
    background: ${({ bg }) => (bg ? bg : '#fff')};
    width: ${({ width }) => (width ? width : 'auto')};
    margin-top: ${({ mt }) => (mt ? mt : 'auto')};
    text-transform: none;
    letter-spacing: 0.14px;
    box-shadow: none;
    &.Mui-disabled {
    }
  }
  &.MuiButton-contained:hover {
    background: #15db95;
  }
  &.MuiButton-contained:active {
    background: #15db95;
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

const Wrapper = styled.div`
  display: grid;
  margin-top: calc(46px - 16px);
  margin-bottom: 24px;
`;

export const YesOrNoButtons = ({ fn, initial = null }) => {
  const [yes, setYes] = useState(initial);

  const handleChange = (value) => {
    setYes(value);
    fn(value);
  };

  return (
    <>
      <Wrapper>
        <StyledButton
          bg={yes === true ? '#15db95' : '#85a3b8'}
          variant="contained"
          onClick={(e) => handleChange(true)}
          disableElevation
          disabled={false}
          fullWidth
        >
          <TextBold size="14px" color="#fff">
            Yes
          </TextBold>
        </StyledButton>
      </Wrapper>
      <Wrapper>
        <StyledButton
          bg={yes === false ? '#15db95' : '#85a3b8'}
          variant="contained"
          onClick={(e) => handleChange(false)}
          disableElevation
          disabled={false}
          fullWidth
        >
          <TextBold size="14px" color="#fff">
            No
          </TextBold>
        </StyledButton>
      </Wrapper>
    </>
  );
};
