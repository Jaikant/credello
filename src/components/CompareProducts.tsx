import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextH3, TextBold, TextMedium, Text } from 'components/Typography';
import { FullWidthWrapper } from 'components/LayoutComponents';

const ComponentMargin = styled.div`
  margin-top: 52px;
  margin-bottom: 48px;
`;

const GridWrapper = styled(ComponentMargin)`
  @media ${device.tablet} {
    display: grid;
    grid-gap: 32px;
  }
  @media ${device.laptop} {
    display: grid;
    grid-gap: 64px;
  }
`;

const CompareProductsGrid = styled(FullWidthWrapper)`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, calc(50% - 10px));
  grid-template-rows: minmax(112px, 1fr);
  overflow: scroll;
  scroll-snap-type: x proximity;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  @media ${device.tablet} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, calc(20%));
    grid-template-rows: minmax(120px, 1fr);
  }
  @media ${device.laptop} {
    margin-right: -64px;
    margin-left: -64px;
    grid-gap: 64px;
    grid-template-columns: repeat(4, calc(20% - 40px));
    grid-template-rows: minmax(120px, 1fr);
  }
`;
//https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585

const DivText = styled(TextBold)`
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
    padding-bottom: calc(112 / 167 * 100%);
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const CompareProducts = () => {
  return (
    <GridWrapper>
      <div>
        <TextH3 mb="8px" color="#02254d">
          Compare financial products
        </TextH3>
        <Text mb="16px" lh="20px" color="#6c7f87">
          Estimate your chances of approval
        </Text>
      </div>
      <CompareProductsGrid>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="13px" center>
              Personal loan
            </DivText>
          </div>
        </BlueButtonBox>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="13px" center>
              Credit Cards
            </DivText>
          </div>
        </BlueButtonBox>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="13px" center>
              Home Equity Loans
            </DivText>
          </div>
        </BlueButtonBox>
        <BlueButtonBox>
          <div>
            <div>
              <img src={require('../assets/images/personalLoan.png')} />
            </div>
            <DivText size="13px" center>
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
