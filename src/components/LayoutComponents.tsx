import styled from 'styled-components';
import { device } from 'libs/device';

type PropsBody = {
  pathname: string;
};
type PropsFormbgWrapper = {
  btm: string;
};

export const BodyDiv = styled.div<PropsBody>`
  height: 100%;
  background: #fff;
  padding: ${({ theme, pathname }) =>
    pathname === '/'
      ? `${theme.spacing.paddingTopHeroY} ${theme.spacing.paddingX} ${theme.spacing.paddingBottomY} ${theme.spacing.paddingX}`
      : `${theme.spacing.paddingTopY} ${theme.spacing.paddingX} ${theme.spacing.paddingBottomY} ${theme.spacing.paddingX}`};
  // justify-content: center;
  @media ${device.tablet} {
    padding: ${({ theme }) =>
      `${theme.spacing.tabletPaddingY} ${theme.spacing.tabletPaddingX}`};
    justify-content: left;
  }
  @media ${device.laptop} {
    padding: ${({ theme }) =>
      `${theme.spacing.laptopPaddingY} ${theme.spacing.laptopPaddingX}`};
    padding: 32px 128px;
  }
`;

export const FullWidthWrapper = styled.div`
  margin-right: ${({ theme }) => `-${theme.spacing.paddingX}`};
  margin-left: ${({ theme }) => `-${theme.spacing.paddingX}`};
  padding-right: ${({ theme }) => `${theme.spacing.paddingX}`};
  padding-left: ${({ theme }) => `${theme.spacing.paddingX}`};
  @media ${device.tablet} {
    margin-right: ${({ theme }) => `-${theme.spacing.tabletPaddingX}`};
    margin-left: ${({ theme }) => `-${theme.spacing.tabletPaddingX}`};
    padding-right: ${({ theme }) => `${theme.spacing.tabletPaddingX}`};
    padding-left: ${({ theme }) => `${theme.spacing.tabletPaddingX}`};
  }
  @media ${device.laptop} {
    margin-right: ${({ theme }) => `-${theme.spacing.laptopPaddingX}`};
    margin-left: ${({ theme }) => `-${theme.spacing.laptopPaddingX}`};
    padding-right: ${({ theme }) => `${theme.spacing.laptopPaddingX}`};
    padding-left: ${({ theme }) => `${theme.spacing.laptopPaddingX}`};
  }
`;

export const ComponentWrapper = styled(FullWidthWrapper)`
  margin-top: ${({ theme }) => `-${theme.spacing.paddingTopHeroY}`};
  padding-top: ${({ theme }) => `${theme.spacing.paddingTopHeroY}`};
  @media ${device.tablet} {
    margin-top: ${({ theme }) => `-${theme.spacing.tabletPaddingY}`};
    padding-top: ${({ theme }) => `${theme.spacing.tabletPaddingY}`};
  }
  @media ${device.laptop} {
    margin-top: ${({ theme }) => `-${theme.spacing.laptopPaddingY}`};
    padding-top: ${({ theme }) => `-${theme.spacing.laptopPaddingY}`};
  }
`;

export const StyledFormBgWrapper = styled.div<PropsFormbgWrapper>`
  position: relative;
  &::before {
    content: ' ';
    position: absolute;
    background: #f3f4fd;
    top: 38px;
    bottom: ${({ btm }) => `${btm ? btm : '0px'}`};
    z-index: 0;
    left: ${({ theme }) => `-${theme.spacing.paddingX}`};
    right: ${({ theme }) => `-${theme.spacing.paddingX}`};
    @media ${device.tablet} {
      left: ${({ theme }) => `-${theme.spacing.tabletPaddingX}`};
      right: ${({ theme }) => `-${theme.spacing.tabletPaddingX}`};
    }
    @media ${device.laptop} {
      left: ${({ theme }) => `-${theme.spacing.laptopPaddingX}`};
      right: ${({ theme }) => `-${theme.spacing.laptopPaddingX}`};
    }
  }
`;

export const StyledBlueHeroBgContainer = styled.div`
  background: #02254d;
  height: 266px;
  margin-left: ${({ theme }) => `-${theme.spacing.paddingX}`};
  margin-right: ${({ theme }) => `-${theme.spacing.paddingX}`};
  margin-top: -26px;
  position: relative;
  padding: 28px 20px 0 20px;
`;
