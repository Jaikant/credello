import Layout from 'components/Layout';
import Link from 'next/link';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { Text, TextBold, TextMedium } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import Slider from '@material-ui/core/Slider';

export const DebtAccounts: CredelloFC = () => (
  <div>
    <BreadCrumbs mb="18px" />
    <Stepper active={4} mb="30px" />
    <TextBold color="#02254d" mb="16px" lh="22px">
      You are almost there! Finally, tell us about your current mortgage loan,
      so we can assess if consolidating using home equity might work for you.{' '}
    </TextBold>
    <BottomBar left="/home-owner" right="/" position="fixed" />
  </div>
);

DebtAccounts.layout = Layout;
export default DebtAccounts;
