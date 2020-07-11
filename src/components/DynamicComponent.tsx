import React from 'react';
import styled from 'styled-components';

//https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript
type Props = {
  tag?: keyof JSX.IntrinsicElements;
  size?: string;
  tabletSize?: string;
  laptopSize?: string;
  mb?: string;
  mt?: string;
  center?: boolean;
  color?: string;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const StyledDynamicComponent = styled.div``;

const DynamicComponent = ({ tag = 'div', children, ...props }: Props) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag);

  return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
  tag: 'div',
};

export default DynamicComponent;
