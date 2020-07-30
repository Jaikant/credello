import { Search as IconSearchMui } from '@material-ui/icons';
import { TextMedium } from 'components/Typography';
import * as React from 'react';
import styled from 'styled-components';
import Logo from '../assets/svgs/logo.svg';
import Menu from 'components/Menu';

interface SvgProps {
  className?: string;
}

type PropsNoboxShadow = {
  noBxShadow: string;
};

const LogoSvg: React.FunctionComponent<SvgProps> = (props: any) => {
  return <Logo {...props} />;
};

const CredelloLogo = styled(LogoSvg)`
  align-self: center;
  margin: 0 auto 0 28%;
  width: 100px;
`;

const IconSearch = styled(IconSearchMui)`
  align-self: center; 
  flex: 0 0 50px
  font-size: 16px;
  margin-right: 8px;
  &.MuiSvgIcon-root {
    fill: #02254d;
  }
`;

const CommonNav = styled.nav`
  position: fixed;
  z-index: 1000;
  display: flex;
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  height: 50px;
  -webkit-box-shadow: 0px 3px 4px 0px #d3d3d3;
  -moz-box-shadow: 0px 3px 4px 0px #d3d3d3;
  box-shadow: 0px 3px 4px 0px #d3d3d3;
`;

const FlexText = styled(TextMedium)`
  display: grid;
  margin-right: 16px;
  align-content: center;
  text-align: center;
`;
const Navbar: React.FC = () => {
  return (
    <CommonNav>
      <Menu />
      <CredelloLogo />
      <IconSearch />
      <FlexText size="14px" tabletSize="16px" color="#02254d">
        Sign up
      </FlexText>
    </CommonNav>
  );
};

export default Navbar;
