import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold, Text } from 'components/Typography';
import ManageDebt from 'components/ManageDebt';

type Props = {
  title?: string;
  subtitle?: string;
};

const HeroWrapper = styled.div`
    background-image: url('${require('../assets/images/Hero.png')}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
    margin: -32px -16px;
    padding: 32px 16px;
    @media ${device.tablet} { 
      background-image: url('${require('../assets/images/HeroDesktop.png')}');
      background-size: 50%, contain;
      margin: -32px -24px;
      padding: 32px 24px;

    };
    @media ${device.laptop} { 
      background-image: url('${require('../assets/images/HeroDesktop.png')}');
      background-size: 50%, contain;
      margin: -32px -128px;
      padding: 32px 128px;
    }  
`;

// @media ${device.tablet} {
//   margin: 16px -24px;
//   padding: 16px 24px;
// };
// @media ${device.laptop} {
//   margin: 16px -128px;
//   padding: 16px 128px;
// }

const Header = ({ title, subtitle }: Props) => {
  return (
    <HeroWrapper>
      <TextBold tag="h1" size="32px" mb="8px">
        {title}
      </TextBold>
      <Text laptopSize="16px" mb="32px">
        {subtitle}
      </Text>
      <ManageDebt />
    </HeroWrapper>
  );
};

Header.defaultProps = {
  title: 'Make financial decisions simple',
  subtitle: 'with personalized guidance',
};

export default Header;
