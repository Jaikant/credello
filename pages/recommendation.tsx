import Layout from 'components/Layout';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import Footer from 'components/Footer';
import BreadCrumbs from 'components/BreadCrumbs';
import { StyledBlueHeroBgContainer } from 'components/LayoutComponents';
import RecTileContainer from 'components/RecommendationTileContainer';
import OptTileContainer from 'components/OptionTileContainer';
import { TextBold, Text } from 'components/Typography';
import { BlueBtmBar } from 'components/BottomBar';

const StyledTextArrowBg = styled(Text)`
    background-image: url('${require('../src/assets/images/down-arrow.svg')}'); 
    background-size: 11px;
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 17px;
    display: inline-block;
    border-bottom: 1px solid #fff;
`;

export const Recommendation: CredelloFC = () => {
  return (
    <div>
      <StyledBlueHeroBgContainer>
        <BreadCrumbs mb="32px" color="#ccc" />

        <TextBold size="24px" lh="28px" mb="13px" color="#fff">
          Credello&apos;s best match for you
        </TextBold>
        <Text size="14px" lh="20px" mb="42px" color="#fff">
          We found 2 options with Match Score more than 4
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

      <RecTileContainer />

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
      <BlueBtmBar />

      <Footer />
    </div>
  );
};

Recommendation.layout = Layout;
export default Recommendation;
