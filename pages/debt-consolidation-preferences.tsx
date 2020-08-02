import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import Stepper from 'components/Stepper';
import { Text, TextBold } from 'components/Typography';
import DebtConsolidationPref from 'components/DebtConsolidationPref';
import BottomBar from 'components/BottomBar';

export const DebtAccounts: CredelloFC = () => (
  <div>
    <BreadCrumbs mb="18px" />
    <Stepper active={2} mb="30px" />
    <TextBold color="#02254d" mb="16px" lh="22px">
      Get recommendations for your unique need. Please prioritize & choose
      what’s most important to you:
    </TextBold>
    <Text size="14px" color="#6c7f87" lh="20px" mb="44px">
      You can change your preferences on results page too to explore changing
      recommendations
    </Text>
    <DebtConsolidationPref mb="48px" />
    <BottomBar
      left="/debt-details-summary"
      right="/credit-score-details"
      position="fixed"
    />
  </div>
);

DebtAccounts.layout = Layout;
export default DebtAccounts;
