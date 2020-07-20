import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold, Text, TextMedium } from 'components/Typography';
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

const UpdatedOn = styled(Text)`
  color: #808080;
`;

const TextBody = styled(Text)`
  letter-spacing: 0.01071em;
`;

const StyledCard = styled(Card)`
  max-width: 500px;
  &.MuiPaper-root {
    box-shadow: none;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 160px;
`;

const StyledContent = styled(CardContent)`
  &.MuiCardContent-root {
    padding-right: 0;
    padding-left: 0;
  }
`;

const TitleBox = styled.div`
  max-width: 278px;
  @media ${device.tablet} {
    max-width: auto;
  }
  @media ${device.laptop} {
  }
`;

function MediaCard(props) {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          image={require(`../assets/images/${props.image}`)}
          title={props.title}
        />
        <StyledContent>
          <InlineDiv>
            <Category size="12px" lh="16px" mb="8px">
              {props.category}
            </Category>
            <UpdatedOn size="12px" lh="16px" mb="8px">
              {props.updated}
            </UpdatedOn>
          </InlineDiv>
          <TitleBox>
            <TextBold size="18px" lh="24px" mb="8px">
              {props.title}
            </TextBold>
          </TitleBox>
          <TextBody size="16px" lh="20px" color="#6c7f87">
            {props.content}
          </TextBody>
        </StyledContent>
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
  feel anxious on a monthly basis`,
};

const MobileCenterWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 34px;
  padding-bottom: 40px;
`;

const Block = () => {
  return (
    <MobileCenterWrapper>
      <TextBold size="24px" mb="16px" color="#02254d">
        Featured articles
      </TextBold>
      <MediaCard />
    </MobileCenterWrapper>
  );
};

Block.defaultProps = {};

export default Block;
