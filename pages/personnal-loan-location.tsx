import { useRef, useContext } from 'react';
import Layout from 'components/Layout';
import { MainContext } from 'libs/context';
import { useRouter } from 'next/router';
import { CredelloFC } from 'libs/types';
import { TextBold } from 'components/Typography';
import { CustomSeparatorPl } from 'components/BreadCrumbs';
import Stepper from 'components/Stepper';
import DebtAccountTypes from 'components/DebtAccountTypes';
import BottomBar from 'components/BottomBar';
import StateForm from 'components/StateForm';

export const DebtAccounts: CredelloFC = () => {
  const router = useRouter();
  const submitRef = useRef<HTMLDivElement | null>();
  const onSubmit = (data) => {
    //add this data to context and navigate.
    // context.dispatch({ type: 'debtDetails', value: data });
    // context.dispatch({ type: 'debtSummary', value: '' });
    router.push('/personnal-loan-score-details');
  };

  return (
    <div>
      <CustomSeparatorPl mb="18px" />
      <Stepper active={2} mb="30px" pl />
      <TextBold size="16px" lh="22px" color="#02254d" mb="40px">
        Where are you located ?
      </TextBold>
      {/* <DebtAccountTypes submitRef={submitRef} onSubmit={onSubmit} /> */}
      <StateForm submitRef={submitRef} />

      <BottomBar
        left="/personnal-loan-details"
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
