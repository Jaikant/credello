import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import { Text } from 'components/Typography';

type ComponentProps = {
  mb?: string;
  color?: string;
};

const Wrapper = styled.div<ComponentProps>`
  margin-bottom: ${({ mb }) => (mb ? mb : `0`)};
`;

export default function CustomSeparator({ mb, color }: ComponentProps) {
  return (
    <Wrapper mb={mb}>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        <Link href="/">
          <Text size="12px" lh="16px" color={color ? color : '#6c7f87'}>
            Manage debt
          </Text>
        </Link>
        <Text size="12px" lh="16px" color={color ? color : '#6c7f87'}>
          Debt consolidation options
        </Text>
      </Breadcrumbs>
    </Wrapper>
  );
}

export const CustomSeparatorPl = ({ mb, color }: ComponentProps) => {
  return (
    <Wrapper mb={mb}>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        <Link href="/">
          <Text size="12px" lh="16px" color={color ? color : '#6c7f87'}>
            Products
          </Text>
        </Link>
        <Text size="12px" lh="16px" color={color ? color : '#6c7f87'}>
          Personnal Loan
        </Text>
        <Text size="12px" lh="16px" color={color ? color : '#6c7f87'}>
          Compare personnal loans
        </Text>
      </Breadcrumbs>
    </Wrapper>
  );
};
