import React, { useContext } from 'react';
import { MainContext } from 'libs/context';
import styled from 'styled-components';
import { TextBold, Text } from 'components/Typography';

const DebtSummaryCard = styled.div`
  padding: 24px 22px 16px 22px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  -moz-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  background: #fff;
  position: relative;
`;

const Wrapper = styled.div`
  margin-bottom: 24px;
`;

type DescAmountProps = {
  desc: string;
  amount: any;
  dollar?: boolean;
  interest?: boolean;
};

const DescAmount = ({ desc, amount, dollar, interest }: DescAmountProps) => (
  <Wrapper>
    <Text size="14px" lh="18px" color="#6c7f87" mb="8px">
      {desc}
    </Text>
    {dollar ? (
      <>
        <TextBold as="span" color="#02254d">
          ${' '}
        </TextBold>{' '}
        <TextBold as="span" color="#02254d" size="20px">
          {amount}
        </TextBold>
      </>
    ) : interest ? (
      <>
        <TextBold as="span" color="#02254d" size="20px">
          {amount}
        </TextBold>
        <TextBold as="span" color="#02254d">
          %
        </TextBold>{' '}
      </>
    ) : (
      <TextBold color="#02254d" size="20px">
        {amount}
      </TextBold>
    )}
  </Wrapper>
);

const DebtSummary = React.memo(() => {
  const context = useContext(MainContext);
  const { appState } = context;
  const { debtSummary } = appState;
  return (
    <DebtSummaryCard>
      <DescAmount
        desc="Total debt amount"
        amount={debtSummary.debtAmount}
        dollar
      />
      <DescAmount
        desc="Combined interest rate"
        amount={debtSummary.combinedInterest}
        interest
      />
      <DescAmount
        desc="Total monthly payment"
        amount={debtSummary.monthylyPayment}
        dollar
      />
      <DescAmount
        desc="Estimated debt-free date"
        amount={debtSummary.debtFreeDate}
      />
      <DescAmount
        desc="Total interest you’ll pay"
        amount={debtSummary.totalInterest}
        dollar
      />
    </DebtSummaryCard>
  );
});

export default DebtSummary;
