import React from 'react';
import { Text, CaptionText } from 'components/Typography';
import styled from 'styled-components';
import { device } from 'libs/device';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Logo from '../assets/svgs/logo.svg';
import { FullWidthWrapper } from 'components/LayoutComponents';

export const ComponentWrapper = styled(FullWidthWrapper)`
  padding-top: ${({ theme }) => `${theme.spacing.padding32}`};
  margin-bottom: ${({ theme }) => `-${theme.spacing.paddingBottomY}`};
  padding-bottom: ${({ theme }) => `${theme.spacing.paddingBottomY}`};
  @media ${device.tablet} {
    padding-top: ${({ theme }) => `${theme.spacing.padding32}`};
    margin-bottom: ${({ theme }) => `-${theme.spacing.tabletPaddingY}`};
    padding-bottom: ${({ theme }) => `${theme.spacing.tabletPaddingY}`};
  }
  @media ${device.laptop} {
    padding-top: ${({ theme }) => `${theme.spacing.padding32}`};
    margin-bottom: ${({ theme }) => `-${theme.spacing.laptopPaddingY}`};
    padding-bottom: ${({ theme }) => `${theme.spacing.laptopPaddingY}`};
  }
`;

const MainContainer = styled(ComponentWrapper)`
  display: grid;
  background: rgb(243, 244, 253);
  min-height: 300px;
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Container = styled.div``;

const GridBox = styled.div`
  display: grid;
  grid-template-rows: auto;
  font-size: 10px;
  font-family: Roboto;
  color: #6c7f87;
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
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const FlexBox = styled.div`
  display: flex;
  margin: 16px 0px;
  @media ${device.tablet} {
    justify-content: flex-end;
  }
  @media ${device.laptop} {
  }
`;

const LogoBox = styled.div`
  margin-bottom: 14px;
`;

const MediaIconBox = styled.div`
  margin-right: 16px;
`;

const PrivacyPolicyBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 24px 0px 12px 0px;
  color: 02254d;
  @media ${device.tablet} {
    justify-content: space-between;
  }
  @media ${device.laptop} {
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: green;
  }
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
  width: 100px;
`;

export const CompanyInfo = () => (
  <PrivacyPolicyBox>
    <CaptionText size="10px" color="#02254d">
      © 2020 Credello. All Rights Reserved.
    </CaptionText>
    <Link href={`/privacy`}>
      <CaptionText size="10px" color="#02254d">
        Privacy Policy
      </CaptionText>
    </Link>
    <Link href={`/terms`}>
      <CaptionText size="10px" color="#02254d">
        Terms of use
      </CaptionText>
    </Link>
  </PrivacyPolicyBox>
);

const SocialMediaIcons = () => (
  <FlexBox>
    <MediaIconBox>
      <FacebookIcon style={{ color: '#02254d' }} />
    </MediaIconBox>
    <MediaIconBox>
      <TwitterIcon style={{ color: '#02254d' }} />
    </MediaIconBox>
  </FlexBox>
);

const LinkGrid = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
`;

const FooterLinks = (props) => {
  const { links } = props;
  return (
    <LinkGrid>
      {links.map((l, index) => (
        <Link href={l.url} key={index}>
          <Text size="12px"> {l.title} </Text>
        </Link>
      ))}
    </LinkGrid>
  );
};

FooterLinks.defaultProps = {
  links: [
    { title: 'Manage your debt', url: '/' },
    { title: 'Make home improvements', url: '/' },
    { title: 'Personal loans & credit cards', url: '/' },
    { title: 'Home equity loans', url: '/' },
    { title: 'Financial resources', url: '/' },
    { title: 'Financial tools & calculators', url: '/' },
    { title: 'Other funding needs', url: '/' },
    { title: 'Investing needs', url: '/' },
    { title: 'Saving needs', url: '/' },
  ],
};

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <GridBox>
          <div>
            <LogoBox>
              <CredelloLogo />
            </LogoBox>
            <FooterLinks />
          </div>
        </GridBox>
      </Container>
      <Container>
        <GridBoxLower>
          <CompanyInfo />
          <SocialMediaIcons />
        </GridBoxLower>
      </Container>
    </MainContainer>
  );
};

export default Footer;
