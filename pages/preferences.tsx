import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import Stepper from 'components/Stepper';
import { TextBold } from 'components/Typography';

export const DebtAccounts: CredelloFC = () => (
  <div>
    <BreadCrumbs mb="18px" />
    <Stepper active={1} mb="30px" />
    <TextBold color="#02254d" mb="16px" lh="22px">
      Debt accounts ...
    </TextBold>
  </div>
);

DebtAccounts.layout = Layout;
export default DebtAccounts;
