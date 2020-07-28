import * as React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import NavBar from 'components/Navbar';
import { BodyDiv } from 'components/LayoutComponents';

// To compensate for the position fixed of Navbar
const MainDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 49px auto;
  min-height: 100vh;
`;

const EmptyDiv = styled.div`
  width: 100%;
  background: #fff;
  height: 49px;
`;

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <MainDiv id="outer-container">
      <NavBar />
      <EmptyDiv />
      <BodyDiv pathname={router.pathname} id="page-wrap">
        {children}
      </BodyDiv>
    </MainDiv>
  );
};

export default Layout;
