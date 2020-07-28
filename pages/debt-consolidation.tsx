import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import Footer from 'components/Footer';
import BreadCrumbs from 'components/BreadCrumbs';
import {
  NeedHeader,
  NeedDescription,
  NeedUserInput,
} from 'components/NeedComponents';

export const DebtConsolidation: CredelloFC = () => (
  <div>
    <BreadCrumbs mb="18px" />
    <NeedHeader mb="36px" />
    <NeedUserInput />
    <NeedDescription />
    <Footer background="#fff" />
  </div>
);

DebtConsolidation.layout = Layout;
export default DebtConsolidation;
