import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import { FullWidthWrapper } from 'components/LayoutComponents';
import NavRight from '../assets/svgs/nav_right.svg';
import NavLeft from '../assets/svgs/nav_left.svg';
import NavSave from '../assets/svgs/nav_save.svg';

const Flex = styled(FullWidthWrapper)`
  position: absolute;
  width: 100%;
  background: #f3f4fd;
  display: flex;
  bottom: 0;
  justify-content: space-between;
`;

const BottomBar = (props) => {
  const router = useRouter();
  return (
    <div>
      <Flex>
        <IconButton onClick={() => router.push(props.left ? props.left : '/')}>
          <NavLeft width="37px" />
        </IconButton>
        <IconButton>
          <NavSave width="24px" />
        </IconButton>
        <IconButton
          onClick={() => {
            if (props.right) {
              router.push(props.right);
            } else {
              props.submit && props.submit();
            }
          }}
        >
          <NavRight width="37px" />
        </IconButton>
      </Flex>
    </div>
  );
};

export default BottomBar;
