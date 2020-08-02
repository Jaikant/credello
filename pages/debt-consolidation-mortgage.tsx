import { useRef } from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { Text, TextBold, TextMedium } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import FormMortgageDetails from 'components/FormMortgageDetails';

export const DebtAccounts: CredelloFC = () => {
  const submitRef = useRef<HTMLFormElement | null>();

  return (
    <div>
      <BreadCrumbs mb="18px" />
      <Stepper active={4} mb="30px" />
      <TextBold color="#02254d" mb="16px" lh="22px">
        You are almost there!
      </TextBold>
      <TextBold color="#02254d" mb="16px" lh="22px">
        Finally, tell us about your current mortgage loan, so we can assess if
        consolidating using home equity might work for you.
      </TextBold>
      <FormMortgageDetails submitRef={submitRef} />
      <BottomBar
        left="/home-owner"
        submit={() => {
          submitRef.current.dispatchEvent(
            new Event('submit', { cancelable: true })
          );
        }}
        position="fixed"
      />
    </div>
  );
};

DebtAccounts.layout = Layout;
export default DebtAccounts;
