import Layout from 'components/Layout';
import styled from 'styled-components';
import Footer from 'components/Footer';

const StyledWrapper = styled.div``;

export const LearnAboutDebt = () => (
  <>
    <p> Learn more about debt ... </p>
    <StyledWrapper>
      <Footer />
    </StyledWrapper>
  </>
);

LearnAboutDebt.layout = Layout;
export default LearnAboutDebt;
