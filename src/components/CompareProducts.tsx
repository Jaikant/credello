import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold, TextMedium, Text } from 'components/Typography';

interface SvgProps {
  className?: string;
}

const CompareProductsGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 10px repeat(4, calc(50% - 40px)) 10px;
  grid-template-rows: minmax(120px, 1fr);
  overflow: scroll;
  scroll-snap-type: x proximity;
  &:before {
    content: '';
    width: 10px;
  }
  &:after {
    content: '';
    width: 10px;
  }
  @media ${device.tablet} {
    grid-gap: 32px;
    grid-template-columns: 10px repeat(4, calc(20%)) 10px;
    grid-template-rows: minmax(120px, 1fr);
  }
  @media ${device.laptop} {
    margin: 0px -64px;
    grid-gap: 64px;
    grid-template-columns: 0px repeat(4, calc(20% - 40px)) 0px;
    grid-template-rows: minmax(120px, 1fr);
  }
`;
//https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585

const DivText = styled(TextMedium)`
  max-width: 80px;
`;

const PayOffDebt = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #02254d;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: center;
  img {
    width: 30px;
    height: auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const GridWrapper = styled.div`
  @media ${device.tablet} {
    display: grid;
    grid-gap: 32px;
  }
  @media ${device.laptop} {
    display: grid;
    grid-gap: 64px;
  }
`;

const CompareProducts = () => {
  return (
    <GridWrapper>
      <div>
        <TextBold size="24px" mb="8px">
          Compare financial products
        </TextBold>
        <Text mb="16px" color="rgb(108, 127, 135)">
          Estimate your chances of approval
        </Text>
      </div>
      <CompareProductsGrid>
        <PayOffDebt>
          <div>
            <img src={require('../assets/images/personalLoan.png')} />
          </div>
          <DivText size="14px" center>
            Personal loan
          </DivText>
        </PayOffDebt>
        <PayOffDebt>
          <div>
            <img src={require('../assets/images/personalLoan.png')} />
          </div>

          <DivText size="14px" center>
            Credit Cards
          </DivText>
        </PayOffDebt>
        <PayOffDebt>
          <div>
            <img src={require('../assets/images/personalLoan.png')} />
          </div>

          <DivText size="14px" center>
            Home Equity Loans
          </DivText>
        </PayOffDebt>
        <PayOffDebt>
          <div>
            <img src={require('../assets/images/personalLoan.png')} />
          </div>

          <DivText size="14px" center>
            Mortgage Refinance
          </DivText>
        </PayOffDebt>
      </CompareProductsGrid>
    </GridWrapper>
  );
};

CompareProducts.defaultProps = {};

export default CompareProducts;
