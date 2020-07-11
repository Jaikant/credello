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
  -webkit-box-shadow: 0px 0px 5px 3px rgba(227, 227, 227, 1);
  -moz-box-shadow: 0px 0px 5px 3px rgba(227, 227, 227, 1);
  box-shadow: 0px 0px 5px 3px rgba(227, 227, 227, 1);
`;

const ListItemStyled = styled(ListItem)`
  line-height: 1;
`;

function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListStyled aria-labelledby="popular calculators">
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <img width="24px" src={require('../assets/images/calculator.png')} />
        </ListItemIcon>
        <ListItemText primary={<TextBold> Debt </TextBold>} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemStyled button>
            <ListItemText primary="Debt consolidation calculator" />
            <NavigateNextIcon />
          </ListItemStyled>
          <ListItemStyled button>
            <ListItemText primary="Debt pay-off calculator" />
            <NavigateNextIcon />
          </ListItemStyled>
          <ListItemStyled button>
            <ListItemText primary="Debt free-date calculator" />
            <NavigateNextIcon />
          </ListItemStyled>
        </List>
      </Collapse>
      <hr />
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <img width="24px" src={require('../assets/images/more.png')} />
        </ListItemIcon>
        <ListItemText primary={<TextBold> More </TextBold>} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button></ListItem>
        </List>
      </Collapse>
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

const PopularCalculators = () => {
  return (
    <>
      <TextBold size="24px" mb="8px">
        Popular calculators
      </TextBold>
      <PopularCalculatorDiv>
        <NestedList />
      </PopularCalculatorDiv>
    </>
  );
};

PopularCalculators.defaultProps = {};

export default PopularCalculators;
