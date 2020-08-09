import { memo, useContext, useState, useRef, MutableRefObject } from 'react';
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

const StateForm = memo((props: Props) => {
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
    // if (state.mortgageTerm === null) {
    //   setState({ ...state, error: 'Please select mortgage term' });
    // } else if (state.mortgageYear === null) {
    //   setState({ ...state, error: 'Please select mortgage year' });
    // } else {
    //   router.push('/');
    // }

    router.push('/personnal-loan-score-details');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={(form) => (props.submitRef.current = form)}
      >
        <InputMargin>
          <FormControl width="100%">
            <InputLabel shrink>State</InputLabel>
            <Select
              name="state"
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
                <em>Select</em>
              </MenuItem>

              <MenuItem value="karnataka">Karnataka</MenuItem>
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

export default StateForm;
