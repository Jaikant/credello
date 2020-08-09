import Layout from 'components/Layout';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import Footer from 'components/Footer';
import { RecommendationBreadCrumbs } from 'components/BreadCrumbs';
import { StyledBlueHeroBgContainer } from 'components/LayoutComponents';
import RecTileContainer from 'components/RecommendationTileContainer';
import OptTileContainer from 'components/OptionTileContainer';
import { TextBold, Text } from 'components/Typography';
import { BlueBtmBar } from 'components/BottomBar';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Popover } from '@material-ui/core';
import { dcprData } from 'data';

const StyledTextArrowBg = styled(Text)`
    background-image: url('${require('../src/assets/images/down-arrow.svg')}'); 
    background-size: 11px;
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 17px;
    display: inline-block;
    border-bottom: 1px solid #fff;
`;

const BlueBtnBarOption = styled.div`
  position: absolute;
  width: 150px;
  height: 136px;
  background: #fff;
  box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  bottom: 51px;
  display: none;
`;

const DropDown = styled(Select)`
  width: 150px;

  .MuiPaper-root {
    background-color: tomato;
  }

  .MuiMenu-list {
    background: green;
  }

  .MuiMenuItem-root {
    font-size: 10px;
  }

  .MuiSelect-selectMenu {
    color: #fff;
    border-bottom: none;
    font-weight: 700;
    font-size: 14px;
  }
  .MuiSelect-icon {
    color: #fff;
  }
  .MuiFormHelperText-root {
    display: none;
  }
  &.MuiInput-underline {
    border-bottom: none;

    &:before {
      border-bottom: none;
    }

    &:after {
      border-bottom: none;
    }

    &:hover:not {
      border-bottom: none;
    }
  }
  .MuiMenuItem-root {
    font-size: 14px;
    color: #02254d;
  }
  .MuiList-padding {
    padding: 0px;
  }
  .MuiSelect-root {
  }
  &.MuiMenu-paper {
    width: 200px;
  }
  .MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded {
    width: 200px;
  }
  &.MuiSelect-selectMenu {
    background: green;
    width: 200px;
  }
`;
const Wrapper = styled.div`
  .MuiBreadcrumbs-separator {
    color: #cccccc;
  }
`;
export const Recommendation: CredelloFC = () => {
  const {
    signature: {
      op: { pl, bt },
      ip: { base_match_score },
    },
  } = dcprData;
  return (
    <Wrapper>
      <StyledBlueHeroBgContainer>
        <RecommendationBreadCrumbs mb="32px" />
        <TextBold size="24px" lh="28px" mb="13px" color="#fff">
          Credello&apos;s best match for you
        </TextBold>
        <Text size="14px" lh="20px" mb="42px" color="#fff">
          {`We found ${base_match_score.hel}options with Match Score more than ${base_match_score.pl}`}
        </Text>
        <StyledTextArrowBg
          size="12"
          lh="20px"
          mb="15px"
          color="#fff"
          style="italic"
        >
          How we match you to available options
        </StyledTextArrowBg>
      </StyledBlueHeroBgContainer>

      <RecTileContainer pl={pl} bt={bt} />

      <TextBold
        size="14px"
        lh="20px"
        mt="37px"
        mb="34px"
        color="#02254d"
        center
      >
        There are other options you may be eligible for
      </TextBold>

      <OptTileContainer />
      <BlueBtmBar>
        <FormControl>
          <DropDown
            value={10}
            onChange={() => {
              /**/
            }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            //variant="filled"
          >
            <MenuItem value={10}>Match Score</MenuItem>
            <MenuItem value={20}>Est. APR Range</MenuItem>
            <MenuItem value={30}>Monthly Payment</MenuItem>
            <MenuItem value={40}>Debt-free Date</MenuItem>
          </DropDown>
        </FormControl>

        <TextBold color="#fff" size="14px">
          Change Inputs
        </TextBold>
        <BlueBtnBarOption />
      </BlueBtmBar>

      <Footer />
    </Wrapper>
  );
};

Recommendation.layout = Layout;
export default Recommendation;
