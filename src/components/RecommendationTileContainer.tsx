import * as React from 'react';
import styled from 'styled-components';
import { TextBold, Text } from 'components/Typography';
import { Clearall } from 'components/LayoutComponents';
import { StyledButton } from 'components/Buttons';
import ComTileContainer from 'components/CommonTileContainer';
import Link from 'next/link';
import TileNotifictionPopover from 'components/TileNotification';
const StyledTileContainer = styled.div`
  min-height: 200px;
  position: relative;
  z-index: 999;
  margin-top: -45px;
`;

const StyledTitleText = styled(Text)`
  float: left;
`;

const StyledCenterText = styled(TextBold)`
  display: flex;
  align-items: center;
`;
const StyledGreenIndicatorContainer = styled.div`
  float: left;
  margin-top: -2px;
  height: 20px;
  margin-left: 10px;
`;
const StyledGreenIndicator = styled.span`
  float: left;
  background: #5cdb95;
  width: 8px;
  height: 20px;
  margin-right: 5px;
`;
const StyledTagMainContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-gap: 3px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;
const StyledTagContainer = styled.div``;
const StyledTag = styled.div`
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #03264e;
  text-transform: uppercase;
  border-radius: 5px;
  height: 32px;
`;
const StyleTickIcon = styled.i`
   background: url('${require('../assets/svgs/tick-tile.svg')}');
   background-repeat: no-repeat;
   width: 11px;
    height: 11px;
    background-size: 12px;
    display: inline-block;
    margin-right: 7px;
`;
const QuestionIcon = styled.i`
 background: url('${require('../assets/svgs/question.svg')}');
  background-repeat: no-repeat;
   width: 15px;
    height: 15px;
    display: inline-block;
    margin-right: 7px;
    margin-left:3px;
   
`;
const StyleCrossIcon = styled.i`
    background: url('${require('../assets/svgs/close-tile.svg')}');
    background-repeat: no-repeat;
    width: 11px;
    height: 11px;
    background-size: 10px;
    display: inline-block;
    margin-right: 7px;
`;

const StyledExpandedContainer = styled.div`
  margin-bottom: 24px;
`;

const StyledButtonInvert = styled(StyledButton)`
  border: 1px solid #15db95 !important;
  background: transparent !important;
`;

const StyledButtonFontColor = styled(TextBold)`
  color: #15db95 !important;
`;

type RectProps = {
  pl?: any;
  bt?: any;
};

const StyledTagInfoText = styled(Text)``;
const StyledHeadingTextContainer = styled.div`
  display: flex;
  justify-content: start;
`;
const RecTileContainer: React.FC<any> = ({ pl, bt }: RectProps) => {
  const [open, setClose] = React.useState(false);
  const [expand3, toggleExpansion3] = React.useState(false);
  const [expand2, toggleExpansion2] = React.useState(false);

  const [expand1, toggleExpansion1] = React.useState(false);

  const handleClick = () => {
    setClose(true);
  };
  const handleExpension3 = () => {
    toggleExpansion3(!expand3);
  };
  const handleExpension2 = () => {
    toggleExpansion2(!expand2);
  };
  const handleExpension1 = () => {
    toggleExpansion1(!expand1);
  };
  return (
    <StyledTileContainer>
      <ComTileContainer pt="18px" pb="20px">
        <StyledHeadingTextContainer>
          <StyledTitleText size="14px" mb="14px" color="#02254d">
            Your Match Score
          </StyledTitleText>
          <QuestionIcon />
          <StyledGreenIndicatorContainer>
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
          </StyledGreenIndicatorContainer>
        </StyledHeadingTextContainer>
        <Clearall />

        <TextBold size="20px" color="#02254d">
          Credello&apos;s best match for you
        </TextBold>
        <StyledTagMainContainer>
          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${pl.min_est_APR}-${pl.max_est_APR} %`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Est. APR Range
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${'$' + Number(pl.mo_payment).toLocaleString('us-US')}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Mo. Payment
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${pl.debt_free_date}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Debt-free Date
            </StyledTagInfoText>
          </StyledTagContainer>
        </StyledTagMainContainer>
        {expand1 && (
          <>
            <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
              <StyleTickIcon />
              Consolidate any type of debt
            </Text>
            <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
              <StyleCrossIcon />
              1-8% origination fee may apply.
            </Text>
          </>
        )}

        <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
          <StyleTickIcon />
          Consolidate any type of debt
        </Text>
        <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
          <StyleTickIcon />
          1-8% origination fee may apply.
        </Text>

        {/* <Text size="14px" lh="16px" color="#03264e" as="a" underline>
          More
        </Text> */}
        <span onClick={handleExpension1}>
          <Text as="span" size="14px" lh="16px" color="#03264e" underline>
            {expand1 ? 'Less' : 'More'}
          </Text>
        </span>
        <Clearall />
        <StyledButtonInvert
          variant="contained"
          bg="#15db95"
          width="100%"
          mt="22px"
        >
          <StyledButtonFontColor size="14px" color="#fff">
            Calculate Savings
          </StyledButtonFontColor>
        </StyledButtonInvert>
        <StyledButton variant="contained" bg="#15db95" width="100%" mt="22px">
          <TextBold size="14px" color="#fff">
            Compare Personal Loans
          </TextBold>
        </StyledButton>

        {!open && <TileNotifictionPopover handleClick={handleClick} />}
      </ComTileContainer>

      <ComTileContainer pt="18px" pb="20px">
        <StyledHeadingTextContainer>
          <StyledTitleText size="14px" mb="14px" color="#02254d">
            Your Match Score
          </StyledTitleText>
          <QuestionIcon />
          <StyledGreenIndicatorContainer>
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
          </StyledGreenIndicatorContainer>
        </StyledHeadingTextContainer>
        <Clearall />
        <TextBold size="20px" color="#02254d">
          Credello&apos;s best match for you
        </TextBold>
        <StyledTagMainContainer>
          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${bt.min_est_APR}-${bt.max_est_APR + '%'} `}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Est. APR Range
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${'$' + Number(pl.mo_payment).toLocaleString('us-US')}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Mo. Payment
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${bt.debt_free_date}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Debt-free Date
            </StyledTagInfoText>
          </StyledTagContainer>
        </StyledTagMainContainer>
        {expand2 && (
          <>
            {' '}
            <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
              <StyleTickIcon />
              Consolidate any type of debt
            </Text>
            <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
              <StyleCrossIcon />
              1-8% origination fee may apply.
            </Text>
          </>
        )}
        <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
          <StyleTickIcon />
          Consolidate any type of debt
        </Text>
        <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
          <StyleCrossIcon />
          1-8% origination fee may apply.
        </Text>
        <span onClick={handleExpension2}>
          <Text as="span" size="14px" lh="16px" color="#03264e" underline>
            {expand2 ? 'Less' : 'More'}
          </Text>
        </span>
        <Clearall />
        <StyledButton variant="contained" bg="#15db95" width="100%" mt="22px">
          <TextBold size="14px" color="#fff">
            Compare Personal Loans
          </TextBold>
        </StyledButton>
      </ComTileContainer>

      <ComTileContainer pt="18px" pb="20px">
        <StyledHeadingTextContainer>
          <StyledTitleText size="14px" mb="14px" color="#02254d">
            Your Match Score
          </StyledTitleText>
          <QuestionIcon />
          <StyledGreenIndicatorContainer>
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
            <StyledGreenIndicator />
          </StyledGreenIndicatorContainer>
        </StyledHeadingTextContainer>
        <Clearall />
        <TextBold size="20px" color="#02254d">
          Credello&apos;s best match for you
        </TextBold>
        <StyledTagMainContainer>
          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${pl.min_est_APR}-${pl.max_est_APR + '%'}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Est. APR Range
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${'$' + Number(pl.mo_payment).toLocaleString('us-US')}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Mo. Payment
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${pl.debt_free_date}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Debt-free Date
            </StyledTagInfoText>
          </StyledTagContainer>
        </StyledTagMainContainer>

        {expand3 && (
          <>
            {' '}
            <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
              <StyleTickIcon />
              Consolidate any type of debt
            </Text>
            <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
              <StyleCrossIcon />
              1-8% origination fee may apply.
            </Text>
          </>
        )}
        <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
          <StyleTickIcon />
          Consolidate any type of debt
        </Text>
        <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
          <StyleCrossIcon />
          1-8% origination fee may apply.
        </Text>
        <span onClick={handleExpension3}>
          <Text as="span" size="14px" lh="16px" color="#03264e" underline>
            {expand3 ? 'Less' : 'More'}
          </Text>
        </span>
        <Clearall />
        <StyledButton variant="contained" bg="#15db95" width="100%" mt="22px">
          <TextBold size="14px" color="#fff">
            Compare Personal Loans
          </TextBold>
        </StyledButton>
      </ComTileContainer>
    </StyledTileContainer>
  );
};

export default RecTileContainer;
