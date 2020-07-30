import * as React from 'react';
import styled from 'styled-components';

type Props = {
  pb?: string;
  pt?: string;
};

const StyledCommonTileContianer = styled.div<Props>`
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  -moz-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  /* min-height: 281px; */
  margin-bottom: 24px;
  /* padding: 22px 20px; */
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: ${({ pb }) => (pb ? `${pb}` : '0')};
  padding-top: ${({ pt }) => (pt ? `${pt}` : '0')};
  box-sizing: border-box;
`;

const ComTileContainer: React.FC<Props> = ({ children, pb, pt }) => {
  return (
    <StyledCommonTileContianer pb={pb} pt={pt}>
      {children}
    </StyledCommonTileContianer>
  );
};

export default ComTileContainer;
