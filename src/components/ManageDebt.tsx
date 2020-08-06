import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from 'libs/device';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import { TextBlack, TextBold, TextMedium } from 'components/Typography';

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
  background-color: #15db95;
  background-image: ${({ src }) =>
    `url('${require(`../assets/images/${src}`)}')`};
  background-size: 100% 100%, cover;
  background-repeat: no-repeat;
  background-position: center;
  text-transform: uppercase;
  border-radius: 5px;
  ${TextBold} {
    display: grid;
    text-align: center;
    align-content: center;
    justify-content: center;
    margin: 24px;
  }
  &:before {
    content: '';
    display: block;
    height: 0px;
    width: 0px;
    background: red;
    padding-bottom: calc(90 / 164 * 100%);
  }
`;

const UnderLine = styled(TextMedium)`
  text-decoration: underline;
`;

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
  const router = useRouter();

  return (
    <div>
      <TextBold mb="10px" lh="20px" color="#02254d">
        Manage your debt better
      </TextBold>
      <ManageDebtGrid>
        <HeroButton src="payoff-debt.png">
          <TextBlack size="14px" lh="18px" color="#fff">
            Ways to pay off debt
          </TextBlack>
        </HeroButton>
        <HeroButton src="estimate-debt.png">
          <TextBlack size="14px" lh="18px" color="#fff">
            Estimate debt-free date
          </TextBlack>
        </HeroButton>
        <HeroButton
          src="consolidate.png"
          onClick={() => router.push('/debt-consolidation')}
        >
          <TextBlack size="14px" lh="18px" color="#fff">
            Ways to consolidate
          </TextBlack>
        </HeroButton>
        <HeroButton src="estimate-savings.png">
          <TextBlack size="14px" lh="18px" color="#fff">
            Estimate savings
          </TextBlack>
        </HeroButton>
      </ManageDebtGrid>
      <LinkWrapper>
        <Link href="/LearnAboutDebt" passHref>
          <UnderLine size="12px" lh="16px" mt="12px" color="#5cdb95" center>
            Learn more about debt consolidation
          </UnderLine>
        </Link>
      </LinkWrapper>
    </div>
  );
};

ManageDebt.defaultProps = {};

export default ManageDebt;
