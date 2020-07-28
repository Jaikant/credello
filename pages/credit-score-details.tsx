import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import Stepper from 'components/Stepper';

export const DebtAccounts: CredelloFC = () => (
  <div>
    <BreadCrumbs mb="18px" />
    <Stepper active={3} mb="30px" />
    <div> Debt accounts ... </div>
  </div>
);

DebtAccounts.layout = Layout;
export default DebtAccounts;
