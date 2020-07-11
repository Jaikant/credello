import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold } from 'components/Typography';

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
      <TextBold mt="8px" center>
        Learn more about debt consolidation
      </TextBold>
    </div>
  );
};

ManageDebt.defaultProps = {};

export default ManageDebt;
