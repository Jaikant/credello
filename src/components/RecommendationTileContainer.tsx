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
const StyledHeadingTextContainer = styled.div``;
const RecTileContainer: React.FC<any> = ({ pl, bt }: RectProps) => {
  return (
    <StyledTileContainer>
      <ComTileContainer pt="18px" pb="20px">
        <StyledHeadingTextContainer>
          <StyledTitleText size="14px" mb="14px" color="#02254d">
            Your Match Score
          </StyledTitleText>
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
                {`${pl.min_est_APR}-${pl.max_est_APR}`}
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Est. APR Range
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                {`${'$' + pl.mo_payment}`}
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

        <StyledExpandedContainer>
          <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
            <StyleTickIcon />
            Consolidate any type of debt
          </Text>
          <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
            <StyleTickIcon />
            1-8% origination fee may apply.
          </Text>
        </StyledExpandedContainer>

        <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
          <StyleTickIcon />
          Consolidate any type of debt
        </Text>
        <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
          <StyleCrossIcon />
          1-8% origination fee may apply.
        </Text>
        {/* <Text size="14px" lh="16px" color="#03264e" as="a" underline>
          More
        </Text> */}
        <Link href="/">
          <Text as="span" size="14px" lh="16px" color="#03264e" underline>
            Less
          </Text>
        </Link>
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

        <TileNotifictionPopover />
      </ComTileContainer>

      <ComTileContainer pt="18px" pb="20px">
        <StyledHeadingTextContainer>
          <StyledTitleText size="14px" mb="14px" color="#02254d">
            Your Match Score
          </StyledTitleText>
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
                {`${'$' + pl.mo_payment}`}
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
        <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
          Consolidate any type of debt
        </Text>
        <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
          1-8% origination fee may apply.
        </Text>
        <Link href="/">
          <Text as="span" size="14px" lh="16px" color="#03264e" underline>
            More
          </Text>
        </Link>
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
                {`${'$' + pl.mo_payment}`}
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
        <Text mt="21px" mb="5px" size="14px" lh="16px" color="#6c7f87">
          Consolidate any type of debt
        </Text>
        <Text mt="5px" size="14px" lh="16px" color="#6c7f87" as="span">
          1-8% origination fee may apply.
        </Text>
        <Link href="/">
          <Text as="span" size="14px" lh="16px" color="#03264e" underline>
            More
          </Text>
        </Link>
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
