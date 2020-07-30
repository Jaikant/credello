import * as React from 'react';
import styled from 'styled-components';
import ComTileContainer from 'components/CommonTileContainer';
import { TextBold, Text } from 'components/Typography';
const StyledOptTileContainer = styled.div``;

const OptTileContainer: React.FC = () => {
  return (
    <StyledOptTileContainer>
      <ComTileContainer pt="30px" pb="34px">
        <TextBold mb="17px" color="#02254d" size="20px">
          Debt Management Program
        </TextBold>
        <Text as="span" size="14px" color="#6c7f87" lh="20px">
          Terms are negotiated by a debt counselling agency on your behalf.
        </Text>
        <Text as="a" size="14px" color="#03264e" underline>
          Learn More
        </Text>
      </ComTileContainer>
      <ComTileContainer pt="30px" pb="34px">
        <TextBold mb="17px" color="#02254d" size="20px">
          CD or Savings Loan
        </TextBold>
        <Text as="span" size="14px" color="#6c7f87" lh="20px">
          Eligibility and rates will depend upon your savings bank and deposit
          amount.
        </Text>
        <Text as="a" size="14px" color="#03264e" underline>
          Learn More
        </Text>
      </ComTileContainer>
      <ComTileContainer pt="30px" pb="34px">
        <TextBold mb="17px" color="#02254d" size="20px">
          401k Loan
        </TextBold>
        <Text as="span" size="14px" color="#6c7f87" lh="20px">
          Eligibility and rates will depend upon your employer and vested
          balance.
        </Text>
        <Text as="a" size="14px" color="#03264e" underline>
          Learn More
        </Text>
      </ComTileContainer>
    </StyledOptTileContainer>
  );
};

export default OptTileContainer;
