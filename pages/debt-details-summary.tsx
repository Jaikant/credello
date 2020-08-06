import Layout from 'components/Layout';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import { TextBold } from 'components/Typography';
import BreadCrumbs from 'components/BreadCrumbs';
import Stepper from 'components/Stepper';
import DebtSummary from 'components/DebtSummary';
import BottomBar from 'components/BottomBar';
import { StyledFormBgWrapper } from 'components/LayoutComponents';

const PageMargin = styled.div`
  margin-bottom: 70px;
`;

export const DebtAccounts: CredelloFC = () => (
  <div>
    <BreadCrumbs mb="18px" />
    <Stepper active={1} mb="30px" />
    <TextBold size="16px" lh="22px" color="#02254d" mb="48px">
      All about your current debt
    </TextBold>
    <StyledFormBgWrapper btm="-45px">
      <DebtSummary />
    </StyledFormBgWrapper>
    <PageMargin />
    <BottomBar
      left="/debt-details"
      right="/debt-consolidation-preferences"
      position="fixed"
    />
  </div>
);

DebtAccounts.layout = Layout;
export default DebtAccounts;
