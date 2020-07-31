import { memo, useContext, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from 'libs/context';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Text, TextBold, TextMedium } from 'components/Typography';
import {
  Select,
  FormControl,
  CardInput,
  InputAdornment,
  InputLabel,
} from 'components/Forms';
import { useForm } from 'react-hook-form';

const InputMargin = styled.div`
  margin-top: 10px;
  padding-bottom: 4px;
`;

type Props = {
  submitRef?: MutableRefObject<any>;
};

const MortgageDetails = memo((props: Props) => {
  const router = useRouter();
  const context = useContext(MainContext);
  const { register, handleSubmit, errors } = useForm();
  const { appState } = context;
  const [state, setState] = useState({
    outstandingMortgage: appState && appState.outstandingMortgage,
    mortgageInterest: appState && appState.mortgageInterest,
    mortgageYear: appState && appState.mortgageYear,
    mortgageTerm: appState && appState.mortgageTerm,
    error: null,
  });

  const handleChange = (event) => {
    const property = event.target.name;
    setState({
      ...state,
      [property]: event.target.value,
      error: null,
    });
    context.dispatch({ type: property, value: event.target.value });
  };

  const onSubmit = (data) => {
    if (state.mortgageTerm === null) {
      setState({ ...state, error: 'Please select mortgage term' });
    } else if (state.mortgageYear === null) {
      setState({ ...state, error: 'Please select mortgage year' });
    } else {
      router.push('/');
    }
  };

  const years = [];
  const getYears = () => {
    for (let index = 2009; index < 2020; index++) {
      years.push(index);
    }
  };

  getYears();

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={(form) => (props.submitRef.current = form)}
      >
        <CardInput
          name="outstandingMortgage"
          value={
            state.outstandingMortgage &&
            Number(
              state.outstandingMortgage.match(/\d+/g).join('')
            ).toLocaleString('us-US')
          }
          onChange={handleChange}
          label={'Outstanding mortgage amount'}
          margin="dense"
          inputRef={register({
            required: true,
            pattern: /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)$/,
          })}
          placeholder={
            errors && errors.outstandingMortgage ? 'Required field' : ''
          }
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          fullWidth
          error={errors && errors.outstandingMortgage}
        />
        {/* {errors && errors.outstandingMortgage && (
          <Text size="14px" lh="16px" color="#941616">
            Only numbers
          </Text>
        )} */}

        <CardInput
          name="mortgageInterest"
          value={state.mortgageInterest}
          onChange={handleChange}
          label={'Interest rate'}
          margin="dense"
          inputRef={register({
            required: true,
            pattern: /^(0|[1-9][0-9]*)$/,
          })}
          placeholder={
            errors && errors.mortgageInterest ? 'Required field' : ''
          }
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          fullWidth
          error={errors && errors.mortgageInterest}
        />
        {/* {errors && errors.mortgageInterest && (
          <Text size="14px" lh="16px" color="#941616">
            Only numbers
          </Text>
        )} */}

        <InputMargin>
          <FormControl>
            <InputLabel shrink>Mortgage origination year</InputLabel>
            <Select
              name="mortgageYear"
              id="select-mortgageYear"
              labelId="select-mortgageYear"
              value={state.mortgageYear}
              margin="dense"
              inputRef={register}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'mortgageYear' }}
              displayEmpty
            >
              <MenuItem value={null}>
                <em>None</em>
              </MenuItem>
              {years.map((y, index) => (
                <MenuItem key={index} value={y}>
                  {y}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </InputMargin>
        <InputMargin>
          <FormControl>
            <InputLabel shrink>Mortgage term</InputLabel>
            <Select
              name="mortgageTerm"
              id="select-mortgageTerm"
              labelId="select-mortgageTerm"
              value={state.mortgageTerm}
              margin="dense"
              inputRef={register}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'mortgageTerm' }}
              displayEmpty
            >
              <MenuItem value={null}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={' > 5yrs'}> {` &gt; 5yrs`} </MenuItem>
              <MenuItem value={' > 10yrs'}> {` &gt; 10yrs`} </MenuItem>
              <MenuItem value={' > 15yrs'}> {` &gt; 15yrs`} </MenuItem>
              <MenuItem value={' > 20yrs'}> {` &gt; 20yrs`} </MenuItem>
              <MenuItem value={' > 25yrs'}> {` &gt; 25yrs`} </MenuItem>
              <MenuItem value={' > 30yrs'}> {` &gt; 30yrs`} </MenuItem>
            </Select>
          </FormControl>
        </InputMargin>
      </form>
      <div>
        {state.error && (
          <Text size="14px" lh="16px" color="#941616" mt="8px">
            {state.error}
          </Text>
        )}
      </div>
    </div>
  );
});

export default MortgageDetails;
