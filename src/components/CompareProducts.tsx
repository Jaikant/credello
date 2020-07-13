import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold, TextMedium, Text } from 'components/Typography';

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

const BlueButtonBox = styled.div`
  display: flex;
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
  div {
    display: grid;
    text-align: center;
    align-content: center;
    justify-content: center;
    grid-gap: 8px;
  }
  &:before {
    content: '';
    display: block;
    height: 0px;
    width: 0px;
    padding-bottom: calc(375 / 1320 * 100%);
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
        <TextBold size="24px" mb="8px" color="#02254d">
          Compare financial products
        </TextBold>
        <Text mb="16px" color="#6c7f87">
          Estimate your chances of approval
        </Text>
      </div>
      <CompareProductsGrid>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="14px" center>
              Personal loan
            </DivText>
          </div>
        </BlueButtonBox>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="14px" center>
              Credit Cards
            </DivText>
          </div>
        </BlueButtonBox>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="14px" center>
              Home Equity Loans
            </DivText>
          </div>
        </BlueButtonBox>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="14px" center>
              Mortgage Refinance
            </DivText>
          </div>
        </BlueButtonBox>
      </CompareProductsGrid>
    </GridWrapper>
  );
};

CompareProducts.defaultProps = {};

export default CompareProducts;
