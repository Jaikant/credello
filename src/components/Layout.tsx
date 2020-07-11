import * as React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import { device } from 'libs/device';

const BodyDiv = styled.div`
  display: grid;
  grid-gap: 32px;
  padding: 32px 16px;
  // border: 1px solid black;
  background: #fff;
  @media ${device.tablet} {
    padding: 32px 24px;
  }
  @media ${device.laptop} {
    padding: 32px 128px;
  }
`;
// To compensate for the position fixed of Navbar
const EmptyDiv = styled.div`
  width: 100%;
  background: #fff;
  height: 58px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <div id="outer-container">
      <NavBar />
      <EmptyDiv />
      <BodyDiv id="page-wrap">{children}</BodyDiv>
    </div>
  );
};

export default Layout;
