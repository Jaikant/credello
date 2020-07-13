import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextBold } from 'components/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const ListStyled = styled(List)`
  position: absolute;
  border-radius: 5px;
  width: 100%;
  top: -48px;
  max-width: 360;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(150, 150, 150, 1);
  -moz-box-shadow: 0px 0px 5px 3px rgba(150, 150, 150, 1);
  box-shadow: 0px 0px 5px 3px rgba(150, 150, 150, 1);
`;

const ListItemStyled = styled(ListItem)`
  line-height: 1;
`;

const StyledListItemText = styled(ListItemText)`
  color: #6c7f87;
  span {
    line-height: 1;
  }
  &.MuiListItemText-root {
    flex: inherit;
  }
`;

const StyledListIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: 36px;
  }
`;

function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListStyled aria-labelledby="popular calculators">
      <ListItem button onClick={handleClick}>
        <StyledListIcon>
          <img width="24px" src={require('../assets/images/calculator.png')} />
        </StyledListIcon>
        <ListItemText
          primary={
            <TextBold size="18px" color="#6c7f87">
              {' '}
              Debt{' '}
            </TextBold>
          }
        />
        {open ? (
          <ExpandLess style={{ color: '#6c7f87' }} />
        ) : (
          <ExpandMore style={{ color: '#6c7f87' }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemStyled button>
            <StyledListItemText primary="Debt consolidation calculator" />
            <NavigateNextIcon fontSize="small" style={{ color: '#6c7f87' }} />
          </ListItemStyled>
          <ListItemStyled button>
            <StyledListItemText primary="Debt pay-off calculator" />
            <NavigateNextIcon fontSize="small" style={{ color: '#6c7f87' }} />
          </ListItemStyled>
          <ListItemStyled button>
            <StyledListItemText primary="Debt free-date calculator" />
            <NavigateNextIcon fontSize="small" style={{ color: '#6c7f87' }} />
          </ListItemStyled>
        </List>
      </Collapse>
      <hr />
      <ListItem button onClick={handleClick}>
        <StyledListIcon>
          <img width="24px" src={require('../assets/images/more.png')} />
        </StyledListIcon>
        <ListItemText
          primary={
            <TextBold size="18px" color="#6c7f87">
              {' '}
              More{' '}
            </TextBold>
          }
        />
        {open ? (
          <ExpandLess style={{ color: '#6c7f87' }} />
        ) : (
          <ExpandMore style={{ color: '#6c7f87' }} />
        )}
      </ListItem>
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button></ListItem>
        </List>
      </Collapse> */}
    </ListStyled>
  );
}

const PopularCalculatorDiv = styled.div`
  position: relative;
  padding: 16px;
  background-color: #02254d;
  margin: 16px -16px;
  @media ${device.tablet} {
    margin: 16px -24px;
    padding: 16px 24px;
  }
  @media ${device.laptop} {
    margin: 16px -128px;
    padding: 16px 128px;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 32px;
  @media ${device.tablet} {
    display: grid;
    grid-gap: 32px;
  }
  @media ${device.laptop} {
    display: grid;
    grid-gap: 64px;
  }
`;

const PopularCalculators = () => {
  return (
    <StyledWrapper>
      <TextBold size="24px" mb="8px" color="#02254d">
        Popular calculators
      </TextBold>
      <PopularCalculatorDiv>
        <NestedList />
      </PopularCalculatorDiv>
    </StyledWrapper>
  );
};

PopularCalculators.defaultProps = {};

export default PopularCalculators;
