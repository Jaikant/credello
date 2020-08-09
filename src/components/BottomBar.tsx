import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import { FullWidthWrapper } from 'components/LayoutComponents';
import NavRight from '../assets/svgs/nav_right.svg';
import NavLeft from '../assets/svgs/nav_left.svg';
import NavSave from '../assets/svgs/nav_save.svg';
import { Text } from 'components/Typography';

type BottomBarProps = {
  position?: string;
};
const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Flex = styled(FullWidthWrapper)<BottomBarProps>`
  position: ${({ position }) => (position ? position : 'absolute')};
  width: 100%;
  background: #f3f4fd;
  display: flex;
  bottom: 0;
  justify-content: space-between;
`;

export const BlueBtmBar = styled(FullWidthWrapper)`
  background: #02254d;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 51px;
  position: relative;
`;

const BottomBar = (props) => {
  const router = useRouter();
  return (
    <div>
      <Flex position={props.position}>
        <IconButtonWrapper>
          <IconButton
            onClick={() => router.push(props.left ? props.left : '/')}
          >
            <NavLeft width="24px" />
          </IconButton>
          <Text size="14px" color="#6c7f87" mb="14px" mt="0px">
            Back
          </Text>
        </IconButtonWrapper>
        <IconButtonWrapper>
          <IconButton>
            <NavSave width="24px" />
          </IconButton>
          <Text size="14px" color="#6c7f87" mb="14px" mt="0px">
            Save progress
          </Text>
        </IconButtonWrapper>
        <IconButtonWrapper>
          <IconButton
            onClick={() => {
              if (props.right) {
                router.push(props.right);
              } else {
                props.submit && props.submit();
              }
            }}
          >
            <NavRight width="24px" />
          </IconButton>
          <Text size="14px" color="#6c7f87" mb="14px">
            Next
          </Text>
        </IconButtonWrapper>
      </Flex>
    </div>
  );
};

export default BottomBar;
