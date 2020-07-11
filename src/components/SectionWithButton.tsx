import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import Button from '@material-ui/core/Button';
import { TextBold, Text } from 'components/Typography';

const SectionWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 32px 16px;
  color: #fff;
  background-color: #5cdb95;
  margin: 16px -16px;
  @media ${device.tablet} {
    grid-gap: 32px;
    margin: 16px -24px;
    padding: 32px 24px;
    justify-content: center;
  }
  @media ${device.laptop} {
    grid-gap: 32px;
    margin: 16px -128px;
    padding: 32px 128px;
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  background: #fff;
  &.MuiButton-contained {
    color: #5cdb95;
    padding: 16px;
    background: #fff;
  }
  @media ${device.tablet} {
    max-width: 400px;
  }
  @media ${device.laptop} {
    max-width: 400px;
  }
`;

// type Props = {
// };

const SectionWithButton = () => {
  return (
    <SectionWrapper>
      <TextBold size="24px">Take control of your finances</TextBold>
      <Text>
        We analyze all of your options, so you can act with confidence
      </Text>
      <StyledButton variant="contained" disableElevation>
        <TextBold size="14px">Manage Debt</TextBold>
      </StyledButton>
    </SectionWrapper>
  );
};

SectionWithButton.defaultProps = {};

export default SectionWithButton;
