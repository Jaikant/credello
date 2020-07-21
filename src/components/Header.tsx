import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { Text, TextH1 } from 'components/Typography';
import ManageDebt from 'components/ManageDebt';
import { ComponentWrapper } from 'components/LayoutComponents';

type Props = {
  title?: string;
  subtitle?: string;
};

const HeroWrapper = styled(ComponentWrapper)`
    background-image: url('${require('../assets/images/Hero.png')}');
    background-size: 50% auto, contain;
    background-repeat: no-repeat;
    background-position: top right;

    @media ${device.tablet} { 
      display: grid;
      grid-gap: 32px;  
      background-image: url('${require('../assets/images/HeroDesktop.png')}');
      background-size: 50% 100%, contain;
    };
    @media ${device.laptop} { 
      display: grid;
      grid-gap: 64px;
      background-image: url('${require('../assets/images/HeroDesktop.png')}');
      background-size: 50% auto, contain;
    }  
`;

const Test = styled.div`
  font-family: Roboto-Bold;
  font-size: 20px;
`;

const Header = ({ title, subtitle }: Props) => {
  return (
    <HeroWrapper>
      <div>
        <Test> hi </Test>
        <TextH1 mb="12px" color="#02254d">
          {title}
        </TextH1>
        <Text laptopSize="16px" lh="20px" mb="44px" color="#6c7f87">
          {subtitle}
        </Text>
      </div>
      <ManageDebt />
    </HeroWrapper>
  );
};

Header.defaultProps = {
  title: 'Make financial decisions simple',
  subtitle: 'with personalized guidance',
};

export default Header;
