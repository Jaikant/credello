import * as React from 'react';
import styled from 'styled-components';
import { TextBold, Text } from 'components/Typography';
import Clearall from 'components/clearall';
import { StyledButton } from 'components/Buttons';
import ComTileContainer from 'components/CommonTileContainer';

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
const StyledTagInfoText = styled(Text)``;
const StyledHeadingTextContainer = styled.div``;
const RecTileContainer: React.FC = () => {
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
                12.5-25.9%
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Est. APR Range
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                $4,000
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Mo. Payment
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                05/20
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
        <Text size="14px" lh="16px" color="#03264e" as="a" underline>
          More
        </Text>
        <Clearall />
        <StyledButton variant="contained" bg="#15db95" width="100%" mt="22px">
          <TextBold size="14px" color="#fff">
            Next Step
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
                12.5-25.9%
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Est. APR Range
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                $4,000
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Mo. Payment
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                05/20
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
        <Text size="14px" lh="16px" color="#03264e" as="a" underline>
          More
        </Text>
        <Clearall />
        <StyledButton variant="contained" bg="#15db95" width="100%" mt="22px">
          <TextBold size="14px" color="#fff">
            Next Step
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
                12.5-25.9%
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Est. APR Range
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                $4,000
              </StyledCenterText>
            </StyledTag>
            <StyledTagInfoText mt="8px" size="10px" color="#6c7f87" center>
              Mo. Payment
            </StyledTagInfoText>
          </StyledTagContainer>

          <StyledTagContainer>
            <StyledTag>
              <StyledCenterText size="15px" color="#fff">
                05/20
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
        <Text size="14px" lh="16px" color="#03264e" as="a" underline>
          More
        </Text>
        <Clearall />
        <StyledButton variant="contained" bg="#15db95" width="100%" mt="22px">
          <TextBold size="14px" color="#fff">
            Next Step
          </TextBold>
        </StyledButton>
      </ComTileContainer>
    </StyledTileContainer>
  );
};

export default RecTileContainer;
