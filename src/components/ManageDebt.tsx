import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold, TextMedium } from 'components/Typography';

const ManageDebtGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media ${device.tablet} {
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media ${device.laptop} {
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

interface HeroButtonProps {
  readonly src: string;
}

const HeroButton = styled.div<HeroButtonProps>`
  display: flex;
  justify-content: center;
  background-color: #5cdb95;
  background-image: ${({ src }) =>
    `url('${require(`../assets/images/${src}`)}')`};
  background-size: 100% 100%, cover;
  background-repeat: no-repeat;
  background-position: center;
  text-transform: uppercase;
  border-radius: 5px;
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0px;
  div {
    display: grid;
    text-align: center;
    align-content: center;
    justify-content: center;
    margin: 16px;
  }
  &:before {
    content: '';
    display: block;
    height: 0px;
    width: 0px;
    background: red;
    padding-bottom: calc(188 / 328 * 100%);
  }
`;

const UnderLine = styled(TextMedium)`
  text-decoration: underline;
`;

type Props = {
  // tag?: keyof JSX.IntrinsicElements;
  size?: string;
  tabletSize?: string;
  laptopSize?: string;
  mb?: string;
  mt?: string;
  center?: boolean;
  color?: string;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const UnderLineText = React.forwardRef(({ children, ...props }: Props) => {
  return <UnderLine {...props}> {children} </UnderLine>;
});

const LinkWrapper = styled.div`
  margin: 8px;
  @media ${device.tablet} {
    margin: 16px;
  }
  @media ${device.laptop} {
    margin: 32px;
  }
`;

const ManageDebt = () => {
  return (
    <div>
      <TextBold mb="8px" color="#02254d">
        Manage your debt better
      </TextBold>
      <ManageDebtGrid>
        <HeroButton src="payoff-debt.png">
          <div>Ways to pay off debt</div>
        </HeroButton>
        <HeroButton src="estimate-debt.png">
          <div>Estimate debt free date</div>
        </HeroButton>
        <HeroButton src="consolidate.png">
          <div>Ways to consolidate</div>
        </HeroButton>
        <HeroButton src="estimate-savings.png">
          <div>Estimate savings</div>
        </HeroButton>
      </ManageDebtGrid>
      <LinkWrapper>
        <Link href="/LearnAboutDebt" passHref>
          <UnderLineText size="12px" mt="8px" color="#5cdb95" center>
            Learn more about debt consolidation
          </UnderLineText>
        </Link>
      </LinkWrapper>
    </div>
  );
};

ManageDebt.defaultProps = {};

export default ManageDebt;
