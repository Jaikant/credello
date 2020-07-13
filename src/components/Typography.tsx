import DynamicComponent from 'components/DynamicComponent';
import { device } from 'libs/device';
import styled from 'styled-components';

export const Text = styled(DynamicComponent)`
  font-family: Roboto;
  font-weight: 400;
  font-size: ${({ size }) => (size ? `${size}` : '16px')};
  line-height: 1.2;
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

export const TextMedium = styled(DynamicComponent)`
  font-family: Roboto;
  font-weight: 500;
  font-size: ${({ size }) => (size ? `${size}` : '16px')};
  line-height: 1.2;
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

export const TextBold = styled(DynamicComponent)`
  font-family: Roboto;
  font-weight: 700;
  font-size: ${({ size }) => (size ? `${size}` : '16px')};
  line-height: 1.2;
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

export const CaptionText = styled(Text)`
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;
