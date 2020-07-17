import * as React from 'react';
import styled from 'styled-components';
import NavBar from 'components/Navbar';
import { BodyDiv } from 'components/LayoutComponents';

// To compensate for the position fixed of Navbar
const EmptyDiv = styled.div`
  width: 100%;
  background: #fff;
  height: 49px;
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
