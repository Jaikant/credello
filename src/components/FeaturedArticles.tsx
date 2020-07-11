import * as React from 'react';
import styled from 'styled-components';
import { TextBold, TextMedium } from 'components/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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

const TextBody = styled(TextMedium)`
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

const StyledCard = styled(Card)`
  max-width: 345px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 140px;
`;

function MediaCard(props) {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          image={require(`../assets/images/${props.image}`)}
          title={props.title}
        />
        <CardContent>
          <InlineDiv>
            <Category size="12px" mb="8px">
              {props.category}
            </Category>
            <UpdatedOn size="12px" mb="8px">
              {props.updated}
            </UpdatedOn>
          </InlineDiv>
          <TextBold size="18px" mb="8px">
            {props.title}
          </TextBold>
          <TextBody size="14px" color="#808080">
            {props.content}
          </TextBody>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

//https://github.com/cyrilwanner/next-optimized-images/issues/141#issuecomment-623556804
MediaCard.defaultProps = {
  image: 'featured.png',
  category: 'DEBT 101',
  updated: ' | Mar 19, 2020',
  title: `Whats a Normal Amount of Debt... and What's Too Much?`,
  content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
  feel anxious. Read on to see what debt looks like for an...`,
};

const Block = () => {
  return (
    <>
      <TextBold size="24px" mb="8 px">
        Featured articles
      </TextBold>
      <MediaCard />
    </>
  );
};

Block.defaultProps = {};

export default Block;
