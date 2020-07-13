import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold, TextMedium } from 'components/Typography';

const ManageDebtGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const Consolidate = styled.div`
    background-color: #5cdb95;
    background-image: url('${require('../assets/images/consolidate.png')}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-transform: uppercase;
    padding: 24px;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`;

const EstimateDebt = styled.div`
    background-color: #5cdb95;
    background-image: url('${require('../assets/images/estimate-debt.png')}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-transform: uppercase;
    padding: 24px;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
`;

const EstimateSaving = styled.div`
    background-color: #5cdb95;
    background-image: url('${require('../assets/images/estimate-savings.png')}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-transform: uppercase;
    padding: 24px;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
`;

const PayOffDebt = styled.div`
    background-color: #5cdb95;
    background-image: url('${require('../assets/images/payoff-debt.png')}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-transform: uppercase;
    padding: 24px;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
`;

const UnderLineText = styled(TextMedium)`
  text-decoration: underline;
`;

const LinkWrapper = styled.div`
  margin: 8px;
  @media ${device.tablet} {
    margin: 16px;
  }
  @media ${device.laptop} {
    margin: 32px;
  }
`;

const ManageDebt = () => {
  return (
    <div>
      <TextBold mb="8px">Manage your debt better</TextBold>
      <ManageDebtGrid>
        <PayOffDebt>Ways to pay off debt</PayOffDebt>
        <EstimateDebt>Estimate debt-free date</EstimateDebt>
        <Consolidate>Ways to consolidate</Consolidate>
        <EstimateSaving>Estimate savings</EstimateSaving>
      </ManageDebtGrid>
      <LinkWrapper>
        <Link href="/LearnAboutDebt">
          <UnderLineText size="12px" mt="8px" color="#5cdb95" center>
            Learn more about debt consolidation
          </UnderLineText>
        </Link>
      </LinkWrapper>
    </div>
  );
};

ManageDebt.defaultProps = {};

export default ManageDebt;
