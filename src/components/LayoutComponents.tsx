import styled from 'styled-components';
import { device } from 'libs/device';

export const BodyDiv = styled.div`
  display: grid;
  grid-gap: 32px;
  padding: ${({ theme }) =>
    `${theme.spacing.paddingTopY} ${theme.spacing.paddingX} ${theme.spacing.paddingBottomY} ${theme.spacing.paddingX}`};
  background: #fff;
  justify-content: center;
  @media ${device.tablet} {
    padding: ${({ theme }) =>
      `${theme.spacing.tabletPaddingY} ${theme.spacing.tabletPaddingX}`};
    justify-content: left;
  }
  @media ${device.laptop} {
    padding: ${({ theme }) =>
      `${theme.spacing.laptopPaddingY} ${theme.spacing.laptopPaddingX}`};
    grid-gap: 128px;
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
  margin-top: ${({ theme }) => `-${theme.spacing.paddingTopY}`};
  padding-top: ${({ theme }) => `${theme.spacing.paddingTopY}`};
  @media ${device.tablet} {
    margin-top: ${({ theme }) => `-${theme.spacing.tabletPaddingY}`};
    padding-top: ${({ theme }) => `${theme.spacing.tabletPaddingY}`};
  }
  @media ${device.laptop} {
    margin-top: ${({ theme }) => `-${theme.spacing.laptopPaddingY}`};
    padding-top: ${({ theme }) => `-${theme.spacing.laptopPaddingY}`};
  }
`;
