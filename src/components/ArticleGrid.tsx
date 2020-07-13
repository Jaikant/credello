import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold, Text } from 'components/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const ManageDebtGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 10px repeat(4, calc(50% - 40px)) 10px;
  grid-template-rows: minmax(120px, 1fr);
  overflow: scroll;
  background: rgb(243, 244, 253);
  margin: 0px -16px;
  padding: 16px 16px;
  scroll-snap-type: x proximity;
  &:before {
    content: '';
    width: 10px;
  }
  &:after {
    content: '';
    width: 10px;
  }
  @media ${device.tablet} {
    grid-gap: 32px;
    grid-template-columns: 10px repeat(4, calc(20%)) 10px;
    grid-template-rows: minmax(120px, 1fr);
    padding: 24px 24px;
    margin: 0px -24px;
  }
  @media ${device.laptop} {
    grid-gap: 64px;
    grid-template-columns: 10px repeat(4, calc(20% - 40px)) 10px;
    grid-template-rows: minmax(120px, 1fr);
    padding: 32px 128px;
    margin: 0px -128px;
  }
`;

const InlineDiv = styled.div`
  display: flex;
`;

const Category = styled(TextBold)`
  margin-right: 8px;
  color: rgb(92, 219, 149);
`;

const UpdatedOn = styled(TextBold)`
  color: #808080;
`;

const StyledCard = styled(Card)`
  &.MuiPaper-root {
    background: inherit;
    box-shadow: none;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 80px;
`;

const StyledCardContent = styled(CardContent)`
  height: 110px;
`;

function MediaCard(props) {
  const { image, category, updated, title, small = false } = props;
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          image={require(`../assets/images/${image}`)}
          title={title}
        />
        <StyledCardContent>
          <InlineDiv>
            {small && (
              <Category size="12px" mb="8px">
                {category}
              </Category>
            )}
            {small && (
              <UpdatedOn size="12px" mb="8px">
                {updated}
              </UpdatedOn>
            )}
          </InlineDiv>
          <Text mb="8px" color="#6c7f87">
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
    <ManageDebtGrid>
      {cards.map((c, index) => {
        return <MediaCard key={index} {...c} />;
      })}
    </ManageDebtGrid>
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
