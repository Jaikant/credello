import { useRef, useContext, useState } from 'react';
import Layout from 'components/Layout';
import { MainContext } from 'libs/context';
import { useRouter } from 'next/router';
import { CredelloFC } from 'libs/types';
import { TextBold } from 'components/Typography';
import { CustomSeparatorPl } from 'components/BreadCrumbs';
import Stepper from 'components/Stepper';
import DebtAccountTypes from 'components/DebtAccountTypes';
import BottomBar from 'components/BottomBar';
import {
  CardInput,
  InputAdornment,
  FormControl,
  RadioGroup,
} from 'components/Forms';
import { useForm } from 'react-hook-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export const PersonnalLoanDetails: CredelloFC = () => {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement | null>();
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(MainContext);
  const { appState } = context;
  const [value, setValue] = useState('years');

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
    //add this data to context and navigate.
    //context.dispatch({ type: 'debtDetails', value: data });
    // context.dispatch({ type: 'debtSummary', value: '' });
    router.push('/personnal-loan-location');
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <CustomSeparatorPl mb="18px" />
      <Stepper active={1} mb="54px" pl />

      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={(form) => (formRef.current = form)}
      >
        <FormControl width="100%">
          <TextBold size="16px" lh="22px" color="#02254d" mb="10px">
            How much money do you need ?
          </TextBold>
          <CardInput
            name="monthlyIncome"
            value={
              monthlyIncome &&
              Number(monthlyIncome.match(/\d+/g).join('')).toLocaleString(
                'us-US'
              )
            }
            onChange={handleChange}
            label={''}
            margin="dense"
            inputRef={register({
              required: true,
              pattern: /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)$/,
            })}
            placeholder={errors && errors.monthlyIncome ? 'Required field' : ''}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            fullWidth
            error={errors && errors.monthlyIncome}
          />

          <TextBold size="16px" lh="22px" color="#02254d" mb="10px" mt="40px">
            What is your expected loan term ?
          </TextBold>

          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="years" control={<Radio />} label="Years" />
            <FormControlLabel
              value="months"
              control={<Radio />}
              label="Months"
            />
          </RadioGroup>
          <CardInput
            name="monthlyIncome"
            value={
              monthlyIncome &&
              Number(monthlyIncome.match(/\d+/g).join('')).toLocaleString(
                'us-US'
              )
            }
            onChange={handleChange}
            label={''}
            margin="dense"
            inputRef={register({
              required: true,
              pattern: /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)$/,
            })}
            placeholder={errors && errors.monthlyIncome ? 'Required field' : ''}
            InputLabelProps={{ shrink: true }}
            fullWidth
            error={errors && errors.monthlyIncome}
          />
        </FormControl>
      </form>

      {/* Mobile footer */}
      <BottomBar
        left="/personnal-loan"
        submit={() => {
          formRef.current.dispatchEvent(
            new Event('submit', { cancelable: true })
          );
        }}
        position="fixed"
      />
    </div>
  );
};

PersonnalLoanDetails.layout = Layout;
export default PersonnalLoanDetails;
