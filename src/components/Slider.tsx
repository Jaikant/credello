import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SliderMui from '@material-ui/core/Slider';
import { MainContext } from 'libs/context';

const CredelloSlider = styled(SliderMui)`
  &.MuiSlider-root {
    color: #52af77;
    border-radius: 5px;
    .MuiSlider-mark {
      display: none;
    }
    .MuiSlider-markLabel {
      display: flex;
      word-wrap: break-word;
      white-space: normal;
      width: 50px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      color: #6c7f87;
      margin-top: 30px;
      margin-left: 32px;
    }
  }
  .MuiSlider-thumb {
    height: 48px;
    width: 48px;
    border: 1px solid #6c7f87;
    margin-top: -8px;
    margin-right: -64px;
    margin-left: 0px;
    overflow: hidden;
    &:focus,
    &:hover,
    &:active {
      box-shadow: inherit;
    }
  }
  .MuiSlider-rail {
    height: 28px;
    border-radius: 5px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(44, 185, 13, 0.6741071428571428) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }
`;

const marks = [
  {
    value: 0,
    label: 'Excellent 720-850',
  },
  {
    value: 22,
    label: 'Good 690-719',
  },

  {
    value: 44,
    label: 'Average 630-689',
  },
  {
    value: 66,
    label: 'Below average 580-629',
  },
  {
    value: 88,
    label: 'Poor <580',
  },
];

export default React.memo(() => {
  const context = useContext(MainContext);
  const [value, setValue] = useState(
    context.appState && context.appState.creditScore
  );

  const mapValuetoScore = (value) => {
    switch (value) {
      case 88:
        return 'Poor';
      case 66:
        return 'Below Average';
      case 44:
        return 'Average';
      case 22:
        return 'Good';
      case 0:
        return 'Excellent';
      default:
        return 'unknown';
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const score = mapValuetoScore(newValue);
    context.dispatch({ type: 'creditScore', value: newValue });
  };
  return (
    <CredelloSlider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="off"
      aria-label="credit score slider"
      defaultValue={0}
      step={null}
      marks={marks}
      track={false}
    />
  );
});
