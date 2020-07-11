import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { device } from 'libs/device';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Logo from '../assets/svgs/logo.svg';

const about = `Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
it to make a type It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
popularised in the 1960s with the release sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
Aldus PageMaker including versions of Lorem IpsumLorem Ipsum the industry’s standard dummy text ever since the 1500.`;

const MainContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  background-color: #fff;
  min-height: 300px;
  margin: 0px -16px;
  @media ${device.tablet} {
    margin: 0px -24px;
  }
  @media ${device.laptop} {
    margin: 0px -128px;
  }
`;

const Container = styled.div`
  padding: 16px;
  @media ${device.tablet} {
    padding: 0px 24px;
  }
  @media ${device.laptop} {
    padding: 0px 128px;
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-rows: auto;
  font-size: 10px;
  font-family: Open Sans;
  color: #000;
  @media ${device.tablet} {
    grid-template-columns: 8fr 1fr 2fr;
    font-size: 18px;
  }
  @media ${device.laptop} {
  }
`;

const GridBoxLower = styled.div`
  display: grid;
  grid-template-rows: auto;
  font-size: 10px;
  font-family: Open Sans;
  color: #000;
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
  }
`;

const FlexBox = styled.div`
  display: flex;
  margin: 32px 0px;
  @media ${device.tablet} {
    justify-content: flex-end;
  }
  @media ${device.laptop} {
  }
`;

const Line = styled.div`
  border-top: 0.5px solid grey;
`;

const LogoBox = styled.div`
  margin-bottom: 32px;
`;

const MediaIconBox = styled.div`
  margin-right: 32px;
`;

const PrivacyPolicyBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 8px 0px;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
  @media ${device.laptop} {
  }
`;

const GatsbyLink = styled.a`
  text-decoration: none;
  color: #000;
  &:hover {
    color: green;
  }
`;

const CaptionTypography = styled(Typography)`
  display: block;
`;

const PrivacyTypography = styled(Typography)`
  display: block;
  margin-right: 16px;
`;

interface SvgProps {
  className?: string;
}

const LogoSvg: React.FunctionComponent<SvgProps> = (props: any) => {
  return <Logo {...props} />;
};

const CredelloLogo = styled(LogoSvg)`
  align-self: center;
  margin: 0 auto;
  width: 150px;
`;

const CompanyInfo = () => (
  <div>
    <CaptionTypography variant="caption">
      © 2020 Credello. All Rights Reserved.
    </CaptionTypography>
    <PrivacyPolicyBox>
      <GatsbyLink href={`/privacy`}>
        <PrivacyTypography variant="subtitle2">
          Privacy Policy
        </PrivacyTypography>
      </GatsbyLink>
      <GatsbyLink href={`/terms`}>
        <CaptionTypography variant="subtitle2">Terms of use</CaptionTypography>
      </GatsbyLink>
    </PrivacyPolicyBox>
  </div>
);

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <GridBox>
          <div>
            <LogoBox>
              <CredelloLogo />
            </LogoBox>
            <CaptionTypography variant="caption">{about}</CaptionTypography>
          </div>
          <div />
          <FlexBox>
            <MediaIconBox>
              <FacebookIcon />
            </MediaIconBox>
            <MediaIconBox>
              <TwitterIcon />
            </MediaIconBox>
          </FlexBox>
        </GridBox>
      </Container>
      <Line />
      <Container>
        <GridBoxLower>
          <CompanyInfo />
        </GridBoxLower>
      </Container>
    </MainContainer>
  );
};

export default Footer;
