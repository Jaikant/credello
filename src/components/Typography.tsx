import { device } from 'libs/device';
import styled from 'styled-components';

type Props = {
  tag?: keyof JSX.IntrinsicElements;
  family?: string;
  size?: string;
  tabletSize?: string;
  laptopSize?: string;
  mb?: string;
  mt?: string;
  lh?: string;
  center?: boolean;
  color?: string;
} & React.HTMLAttributes<HTMLOrSVGElement>;

export const Text = styled.div<Props>`
  font-family: ${({ family }) => (family ? `${family}` : 'Roboto-Regular')};
  font-weight: 400;
  font-size: ${({ size }) => (size ? `${size}` : '16px')};
  line-height: ${({ lh }) => (lh ? `${lh}` : `normal`)};
  webkit-font-smoothing: antialiased;
  margin: 0;
  margin-bottom: ${({ mb }) => (mb ? `${mb}` : '0')};
  margin-top: ${({ mt }) => (mt ? `${mt}` : '0')};
  color: ${({ color }) => (color ? `${color}` : 'inherit')};
  text-align: ${({ center }) => (center ? `center` : 'initial')};
  @media ${device.tablet} {
    font-size: ${({ tabletSize, size }) => (tabletSize ? tabletSize : size)};
  }
  @media ${device.laptop} {
    font-size: ${({ laptopSize, tabletSize, size }) =>
      laptopSize ? laptopSize : tabletSize ? tabletSize : size};
  }
`;

export const TextMedium = styled.div<Props>`
  font-family: ${({ family }) => (family ? `${family}` : 'Roboto-Medium')};
  font-weight: 500;
  font-size: ${({ size }) => (size ? `${size}` : '16px')};
  line-height: ${({ lh }) => (lh ? `${lh}` : `normal`)};
  margin: 0;
  margin-bottom: ${({ mb }) => (mb ? `${mb}` : '0')};
  margin-top: ${({ mt }) => (mt ? `${mt}` : '0')};
  color: ${({ color }) => (color ? `${color}` : 'inherit')};
  text-align: ${({ center }) => (center ? `center` : 'initial')};
  @media ${device.tablet} {
    font-size: ${({ tabletSize, size }) => (tabletSize ? tabletSize : size)};
  }
  @media ${device.laptop} {
    font-size: ${({ laptopSize, tabletSize, size }) =>
      laptopSize ? laptopSize : tabletSize ? tabletSize : size};
  }
`;

export const TextBold = styled.h3<Props>`
  font-family: ${({ family }) => (family ? `${family}` : 'Roboto-Bold')};
  font-weight: 700;
  font-size: ${({ size }) => (size ? `${size}` : '16px')};
  line-height: ${({ lh }) => (lh ? `${lh}` : `normal`)};
  margin: 0;
  margin-bottom: ${({ mb }) => (mb ? `${mb}` : '0')};
  margin-top: ${({ mt }) => (mt ? `${mt}` : '0')};
  color: ${({ color }) => (color ? `${color}` : 'inherit')};
  text-align: ${({ center }) => (center ? `center` : 'initial')};
  @media ${device.tablet} {
    font-size: ${({ tabletSize, size }) => (tabletSize ? tabletSize : size)};
  }
  @media ${device.laptop} {
    line-height: 1.5;
    font-size: ${({ laptopSize, tabletSize, size }) =>
      laptopSize ? laptopSize : tabletSize ? tabletSize : size};
  }
`;

export const TextH1 = styled(TextBold).attrs(() => ({
  as: 'h1',
  size: '30px',
  lh: '1.13',
}))<Props>``;

export const TextH3 = styled(TextBold).attrs(() => ({
  as: 'h3',
  size: '24px',
  lh: '28px',
}))<Props>``;

export const TextH4 = styled(TextBold).attrs(() => ({
  as: 'h4',
  size: '18px',
  lh: '24px',
}))<Props>``;

export const TextH5 = styled(TextBold).attrs(() => ({
  as: 'h5',
  size: '16px',
  lh: '22px',
}))<Props>``;

export const TextH6 = styled(TextBold).attrs(() => ({
  as: 'h6',
  size: '14px',
  lh: '18px',
}))<Props>``;

export const CaptionText = styled(Text)`
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;
