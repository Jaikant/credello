import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { StyledButton } from 'components/Buttons';
import { TextBold, TextMedium } from 'components/Typography';
import { FullWidthWrapper } from 'components/LayoutComponents';

const ComponentYPadding = styled(FullWidthWrapper)`
  padding-top: ${({ theme }) => theme.spacing.padding28};
  padding-bottom: ${({ theme }) => theme.spacing.padding30};
`;

const SectionWrapper = styled(ComponentYPadding)`
  display: grid;
  grid-gap: 12px;
  background-color: #5cdb95;
  @media ${device.tablet} {
    grid-gap: 32px;
    justify-content: center;
  }
  @media ${device.laptop} {
    grid-gap: 32px;
    // margin: 0px -128px;
    // padding: 32px 128px;
    justify-content: center;
  }
`;

const SectionWithButton = () => {
  return (
    <SectionWrapper>
      <TextBold size="24px" lh="34px" color="#fff">
        Take control of your finances
      </TextBold>
      <TextMedium lh="20px" color="#fff">
        We analyze all of your options, so you can act with confidence
      </TextMedium>
      <StyledButton variant="contained" disableElevation>
        <TextBold size="14px" color="#5cdb95">
          Next Step
        </TextBold>
      </StyledButton>
    </SectionWrapper>
  );
};

SectionWithButton.defaultProps = {};

export default SectionWithButton;
