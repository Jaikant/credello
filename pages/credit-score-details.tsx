import Layout from 'components/Layout';
import Link from 'next/link';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { Text, TextBold, TextMedium } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import Slider from 'components/Slider';

export const DebtAccounts: CredelloFC = () => {
  return (
    <div>
      <BreadCrumbs mb="18px" />
      <Stepper active={3} mb="30px" />
      <TextBold color="#02254d" mb="16px" lh="22px">
        Product offers depend on your credit score. How&apos;s your credit score
        these days?
      </TextBold>
      <Link href="/">
        <Text size="14px" lh="16px" color="#14cc8c" underline>
          Check my credit score
        </Text>
      </Link>
      <Slider />
      <BottomBar
        left="/debt-consolidation-preferences"
        right="/debt-consolidation-income"
        position="fixed"
      />
    </div>
  );
};

DebtAccounts.layout = Layout;
export default DebtAccounts;
