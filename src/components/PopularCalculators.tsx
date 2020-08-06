import * as React from 'react';
import styled from 'styled-components';
import { device } from 'libs/device';
import { TextH3, TextBold } from 'components/Typography';
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
  top: -40px;
  max-width: 360;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  -moz-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  &.MuiList-root {
    padding-left: 10px;
  }
`;

const ListItemStyled = styled(ListItem)`
  line-height: 1;
`;

const StyledListItemText = styled(ListItemText)`
  color: #6c7f87;
  span {
    line-height: 1;
    color: #6c7f87;
  }
  &.MuiListItemText-root {
    flex: inherit;
  }
`;

const StyledListIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: 40px;
  }
`;

const StyledHr = styled.hr`
  color: #cfcfcf;
  background-color: #cfcfcf;
  margin-left: -10px;
  height: 2px;
  border: 0;
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
          <img
            width="27px"
            height="31px"
            src={require('../assets/svgs/calculator01.svg')}
          />
        </StyledListIcon>
        <ListItemText
          primary={
            <TextBold size="18px" lh="30px" color="#6c7f87">
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
      <StyledHr />
      <ListItem button onClick={handleClick}>
        <StyledListIcon>
          <img
            width="30px"
            height="23px"
            src={require('../assets/svgs/calculator02.svg')}
          />
        </StyledListIcon>
        <ListItemText
          primary={
            <TextBold size="18px" lh="30px" color="#6c7f87">
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
  background-color: #02254d;
  margin: ${({ theme }) => `16px -${theme.spacing.paddingX}`};
  padding: ${({ theme }) => `0px ${theme.spacing.paddingX}`};
  @media ${device.tablet} {
    margin: ${({ theme }) => `16px -${theme.spacing.tabletPaddingX}`};
    padding: ${({ theme }) => `0px ${theme.spacing.tabletPaddingX}`};
  }
  @media ${device.laptop} {
    margin: ${({ theme }) => `16px -${theme.spacing.laptopPaddingX}`};
    padding: ${({ theme }) => `0px ${theme.spacing.laptopPaddingX}`};
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
      <TextH3 mb="20px" color="#02254d">
        Popular calculators
      </TextH3>
      <PopularCalculatorDiv>
        <NestedList />
      </PopularCalculatorDiv>
    </StyledWrapper>
  );
};

PopularCalculators.defaultProps = {};

export default PopularCalculators;
