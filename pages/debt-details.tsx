import { useRef, useContext } from 'react';
import Layout from 'components/Layout';
import { MainContext } from 'libs/context';
import { useRouter } from 'next/router';
import { CredelloFC } from 'libs/types';
import { TextBold } from 'components/Typography';
import BreadCrumbs from 'components/BreadCrumbs';
import Stepper from 'components/Stepper';
import DebtAccountTypes from 'components/DebtAccountTypes';
import BottomBar from 'components/BottomBar';
import styled from 'styled-components';

const Space = styled.div``;

export const DebtAccounts: CredelloFC = () => {
  const context = useContext(MainContext);
  const router = useRouter();
  const submitRef = useRef<HTMLDivElement | null>();
  const onSubmit = (data) => {
    //add this data to context and navigate.
    context.dispatch({ type: 'debtDetails', value: data });
    context.dispatch({ type: 'debtSummary', value: '' });
    router.push('/debt-details-summary');
  };

  return (
    <div>
      <BreadCrumbs mb="18px" />
      <Stepper active={1} mb="30px" />
      <TextBold size="16px" lh="22px" color="#02254d" mb="40px">
        Tells us more about your debt accounts.
      </TextBold>
      <DebtAccountTypes submitRef={submitRef} onSubmit={onSubmit} />
      <BottomBar
        left="/debt-consolidation"
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
