import * as React from 'react';
import styled from 'styled-components';
import { Text } from 'components/Typography';

const StyleMatchScorePopOver = styled.div`
  position: absolute;
  top: 42px;
  background: #f3f4fd;
  border: 1px solid #d9dcdf;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 81px;
  left: 0px;
  right: 0px;
  padding-right: 30px;
`;

const StyledPopoverCloseIcon = styled.i`
  background-image: url('${require('../assets/svgs/close.svg')}'); 
  background-size: 11px;
    position: absolute;
    right: 11px;
    top: 11px;
    display: block;
    width: 11px;
    height: 11px;
    background-repeat: no-repeat;
`;
const TileNotifictionPopover: React.FC = () => {
  return (
    <StyleMatchScorePopOver>
      <Text size="14px" color="#6c7f87" lh="20px">
        Your Credello Match Score is a custom value that represents how closely
        the product matches your goals &amp; requirements
      </Text>

      <StyledPopoverCloseIcon />
    </StyleMatchScorePopOver>
  );
};

export default TileNotifictionPopover;
