import DynamicComponent from 'components/DynamicComponent';
import { device } from 'libs/device';
import styled, { css } from 'styled-components';

export const BoldStyle = (
  size,
  tabletSize,
  laptopSize,
  mb,
  mt,
  center,
  color
) => css`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: ${size ? `${size}` : '16px'};
  line-height: 1.2;
  margin: 0;
  margin-bottom: ${mb ? `${mb}` : '0'};
  margin-top: ${mt ? `${mt}` : '0'};
  color: ${color ? `${color}` : 'inherit'};
  ${center ? `text-align: center` : ''};
  @media ${device.tablet} {
    ${tabletSize ? `font-size: ${tabletSize}` : `${size}`};
  }
  @media ${device.laptop} {
    line-height: 1.5;
    ${laptopSize
      ? `font-size: ${laptopSize}`
      : tabletSize
      ? `font-size: ${tabletSize}`
      : `${size}`};
  }
`;

export const MediumStyle = (
  size,
  tabletSize,
  laptopSize,
  mb,
  mt,
  center,
  color
) => css`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: ${size ? `${size}` : '16px'};
  line-height: 1.2;
  margin: 0;
  margin-bottom: ${mb ? `${mb}` : '0'};
  margin-top: ${mt ? `${mt}` : '0'};
  color: ${color ? `${color}` : 'inherit'};
  @media ${device.tablet} {
    ${tabletSize ? `font-size: ${tabletSize}` : `${size}`};
  }
  @media ${device.laptop} {
    ${laptopSize
      ? `font-size: ${laptopSize}`
      : tabletSize
      ? `font-size: ${tabletSize}`
      : `${size}`};
  }
`;

export const NormalStyle = (
  size,
  tabletSize,
  laptopSize,
  mb,
  mt,
  center,
  color
) => css`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: ${size ? `${size}` : '16px'};
  line-height: 1.2;
  margin: 0;
  margin-bottom: ${mb ? `${mb}` : '0'};
  margin-top: ${mt ? `${mt}` : '0'};
  color: ${color ? `${color}` : 'inherit'};
  @media ${device.tablet} {
    ${tabletSize ? `font-size: ${tabletSize}` : `${size}`};
  }
  @media ${device.laptop} {
    ${laptopSize
      ? `font-size: ${laptopSize}`
      : tabletSize
      ? `font-size: ${tabletSize}`
      : `${size}`};
  }
`;

export const Text = styled(DynamicComponent)`
  ${(props) =>
    NormalStyle(
      props.size,
      props.tabletSize,
      props.laptopSize,
      props.mb,
      props.mt,
      props.center,
      props.color
    )};
`;

export const TextMedium = styled(DynamicComponent)`
  ${(props) =>
    MediumStyle(
      props.size,
      props.tabletSize,
      props.laptopSize,
      props.mb,
      props.mt,
      props.center,
      props.color
    )};
`;

export const TextBold = styled(DynamicComponent)`
  ${(props) =>
    BoldStyle(
      props.size,
      props.tabletSize,
      props.laptopSize,
      props.mb,
      props.mt,
      props.center,
      props.color
    )};
`;
