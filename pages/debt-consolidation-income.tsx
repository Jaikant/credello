import React, { useContext, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { Text, TextBold } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import { MainContext } from 'libs/context';
import { YesOrNoButtons } from 'components/Buttons';
import { useForm } from 'react-hook-form';
import { CardInput, InputAdornment } from 'components/Forms';

export const MonthlyIncome: CredelloFC = () => {
  const router = useRouter();
  const submitRef = useRef<HTMLFormElement | null>();
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(MainContext);
  const { appState } = context;

  const [monthlyIncome, setMonthlyIncome] = useState(
    appState && appState.monthlyIncome
  );
  const [error, setError] = useState(null);

  const updatePayOffAbility = (value) => {
    context.dispatch({ type: 'payoffAbility', value });
    setError(null);
  };

  const handleChange = (event) => {
    setMonthlyIncome(event.target.value);
    context.dispatch({ type: 'monthlyIncome', value: event.target.value });
  };

  const onSubmit = (data) => {
    router.push('/debt-consolidation-home-owner');
  };

  return (
    <div>
      <BreadCrumbs mb="18px" />
      <Stepper active={3} mb="30px" />
      <TextBold color="#02254d" mb="16px" lh="22px">
        What is your monthly income?{' '}
      </TextBold>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={(form) => (submitRef.current = form)}
      >
        <CardInput
          name="monthlyIncome"
          value={
            monthlyIncome &&
            monthlyIncome.match(/\d+/g) &&
            Number(monthlyIncome.match(/\d+/g).join('')).toLocaleString('us-US')
          }
          onChange={handleChange}
          label={'Monthly Income- wages, investments, rentals'}
          margin="dense"
          inputRef={register({
            required: true,
            pattern: /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)$/,
          })}
          placeholder={errors && errors.monthlyIncome ? 'Required field' : ''}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          fullWidth
          error={errors && errors.monthlyIncome}
        />
      </form>

      <TextBold color="#02254d" mb="24px" lh="22px" mt="48px">
        Will you be able to payoff $7850 USD within the next 18 or 21 months?
      </TextBold>
      <YesOrNoButtons
        fn={updatePayOffAbility}
        initial={context.appState.payoffAbility}
      />
      <div>
        {error && (
          <Text size="14px" lh="16px" color="#941616" mt="8px">
            {error}
          </Text>
        )}
      </div>

      <BottomBar
        left="/credit-score-details"
        submit={() => {
          if (context.appState.payoffAbility === null) {
            setError('Please select yes or no');
          } else {
            submitRef.current.dispatchEvent(
              new Event('submit', { cancelable: true })
            );
          }
        }}
        position="fixed"
      />
    </div>
  );
};

MonthlyIncome.layout = Layout;
export default MonthlyIncome;
