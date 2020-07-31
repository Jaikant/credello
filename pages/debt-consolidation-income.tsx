import React, { useContext } from 'react';
import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { TextBold } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import Question from 'components/Question';
import { MainContext } from 'libs/context';
import { YesOrNoButtons } from 'components/Buttons';

export const MonthlyIncome: CredelloFC = () => {
  const context = useContext(MainContext);
  const updatePayOffAbility = (value) =>
    context.dispatch({ type: 'payoffAbility', value });
  return (
    <div>
      <BreadCrumbs mb="18px" />
      <Stepper active={3} mb="30px" />
      <TextBold color="#02254d" mb="16px" lh="22px">
        What is your monthly income?{' '}
      </TextBold>

      <TextBold color="#02254d" mb="16px" lh="22px">
        Will you be able to payoff $xxx within the next 18 or 21 months?
      </TextBold>
      <YesOrNoButtons
        fn={updatePayOffAbility}
        initial={context.appState.payoffAbility}
      />

      <BottomBar
        left="/credit-score-details"
        right="/debt-consolidation-home-owner"
        position="fixed"
      />
    </div>
  );
};

MonthlyIncome.layout = Layout;
export default MonthlyIncome;
