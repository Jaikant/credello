import React, { useContext } from 'react';
import styled from 'styled-components';
import { TextMedium, TextBold } from 'components/Typography';
import { StyledButton } from 'components/Buttons';
import { MainContext } from 'libs/context';

const Wrapper = styled.div`
  margin-bottom: 12px;
`;

export default () => {
  const context = useContext(MainContext);
  const [preference, setPreference] = React.useState(
    context && context.appState && context.appState.preference
  );

  const handleSelect = (newPreference) => {
    setPreference(newPreference);
    context.dispatch({ type: 'preference', value: newPreference });
  };

  return (
    <div>
      <Wrapper>
        <StyledButton
          bg={preference === 'lowerMonthlyPayment' ? '#15db95' : '#85a3b8'}
          variant="contained"
          onClick={() => handleSelect('lowerMonthlyPayment')}
          disableElevation
          disabled={false}
          fullWidth
        >
          <TextBold size="14px" color="#fff">
            Lower monthly payments
          </TextBold>
        </StyledButton>
      </Wrapper>
      <TextMedium size="12px" lh="16px" color="#6c7f87" mb="24px">
        You pay less every month, but your time to be debt-free and total
        interest may increase
      </TextMedium>
      <Wrapper>
        <StyledButton
          bg={preference === 'reduceTotalInterest' ? '#15db95' : '#85a3b8'}
          variant="contained"
          onClick={() => handleSelect('reduceTotalInterest')}
          disableElevation
          disabled={false}
          fullWidth
        >
          <TextBold size="14px" color="#fff">
            Reduce total interest
          </TextBold>
        </StyledButton>
      </Wrapper>
      <TextMedium size="12px" lh="16px" color="#6c7f87" mb="24px">
        You pay less interest, but your monthly payments may increase
      </TextMedium>
      <Wrapper>
        <StyledButton
          bg={preference === 'debtFreeFaster' ? '#15db95' : '#85a3b8'}
          variant="contained"
          onClick={() => handleSelect('debtFreeFaster')}
          disableElevation
          disabled={false}
          fullWidth
        >
          <TextBold size="14px" color="#fff">
            Be debt-free faster
          </TextBold>
        </StyledButton>
      </Wrapper>
      <TextMedium size="12px" lh="16px" color="#6c7f87" mb="24px">
        You will pay-off your debts faster, but monthly payments may increase
      </TextMedium>
    </div>
  );
};
