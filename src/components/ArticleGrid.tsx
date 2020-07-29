import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { Text } from 'components/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { FullWidthWrapper } from 'components/LayoutComponents';

const ComponentYPadding = styled(FullWidthWrapper)`
  padding-left: 10px;
  padding-top: ${({ theme }) => theme.spacing.padding13};
  padding-bottom: ${({ theme }) => theme.spacing.padding22};
`;

const WrapperArticleGrid = styled(ComponentYPadding)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, calc(50% - 30px));
  grid-template-rows: minmax(120px, 1fr);
  overflow: scroll;
  background: rgb(243, 244, 253);
  scroll-snap-type: x proximity;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  @media ${device.tablet} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, calc(20%));
    grid-template-rows: minmax(120px, 1fr);
    padding: 24px 24px;
    margin: 0px -24px;
  }
  @media ${device.laptop} {
    grid-gap: 64px;
    grid-template-columns: repeat(4, calc(20% - 40px));
    grid-template-rows: minmax(120px, 1fr);
    padding: 32px 128px;
    margin: 0px -128px;
  }
`;

const StyledCard = styled(Card)`
  &.MuiPaper-root {
    background: inherit;
    box-shadow: none;
    border-radius: 0px;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 71px;
  border-radius: 4px;
`;

const StyledCardContent = styled(CardContent)`
  &.MuiCardContent-root {
    overflow: visible;
    padding: 0;
    padding-top: 14px;
  }
`;

function MediaCard(props) {
  const { image, title } = props;
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          image={require(`../assets/images/${image}`)}
          title={title}
        />
        <StyledCardContent>
          <Text mb="8px" lh="20px" color="#6c7f87">
            {title}
          </Text>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}

MediaCard.defaultProps = {
  image: 'featured.png',
  category: 'DEBT 101',
  updated: ' | Mar 19, 2020',
  title: `Whats a Normal Amount of Debt... and What's Too Much?`,
  content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
  feel anxious. Read on to see what debt looks like for an...`,
};

const ArticleGrid = ({ cards }) => {
  return (
    <WrapperArticleGrid>
      {cards.map((c, index) => {
        return <MediaCard key={index} {...c} />;
      })}
    </WrapperArticleGrid>
  );
};

ArticleGrid.defaultProps = {
  cards: [
    {
      image: 'loanCredit.png',
      category: 'DEBT 101',
      updated: ' | Mar 19, 2020',
      title: `How to get a personal loan with a credit card?`,
      content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
      feel anxious. Read on to see what debt looks like for an...`,
    },
    {
      image: 'refinance.png',
      category: 'DEBT 101',
      updated: ' | Mar 19, 2020',
      title: `Should I refinance during the Covid-19 outbreak?`,
      content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
      feel anxious. Read on to see what debt looks like for an...`,
    },
    {
      image: 'creditDebt.png',
      category: 'DEBT 101',
      updated: ' | Mar 19, 2020',
      title: `How to get out of credit card debt fast?`,
      content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
      feel anxious. Read on to see what debt looks like for an...`,
    },
    {
      image: 'featured.png',
      category: 'DEBT 101',
      updated: ' | Mar 19, 2020',
      title: `Whats a Normal Amount of Debt... and What's Too Much?`,
      content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
      feel anxious. Read on to see what debt looks like for an...`,
    },
  ],
};

export default ArticleGrid;
