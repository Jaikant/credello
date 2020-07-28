import React, { useEffect, useContext } from 'react';
import { MainContext } from 'libs/context';
import styled from 'styled-components';
import FormControlMui from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import NativeSelectMui from '@material-ui/core/NativeSelect';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornmentMui from '@material-ui/core/InputAdornment';
import RemoveCard from '../assets/svgs/ico_remove.svg';
import AddCard from '../assets/svgs/ico_add.svg';
import { TextMedium, Text } from 'components/Typography';

const DebtCardAndButtons = styled.div`
  display: grid;
  grid-gap: 16px;
  padding-bottom: 46px;
  position: relative;
`;

const DebtCard = styled.div`
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  -moz-box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
  box-shadow: 0px 0px 3px 3px rgba(220, 220, 220, 0.4);
`;

const DebtHeader = styled.div`
  background: #02254d;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 12px 24px;
`;
const DebtCardContent = styled.div`
  padding: 8px 22px 16px 22px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormControl = styled(FormControlMui)`
  minwidth: 120;
`;

const NativeSelect = styled(NativeSelectMui)`
  color: #fff;
  .MuiNativeSelect-root {
    color: #fff;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
  }
  .MuiNativeSelect-icon {
    fill: #fff;
    width: 20px;
  }
  .MuiNativeSelect-select.MuiNativeSelect-select {
    padding-right: 8px;
  }
  .MuiInputBase-input {
    padding: 0;
  }
  &.MuiInput-underline {
    border-bottom: none;

    &:before {
      border-bottom: none;
    }

    &:after {
      border-bottom: none;
    }

    &:hover:not {
      border-bottom: none;
    }
  }
`;

const CardInput = styled(TextField)`
  .MuiInputBase-input {
    font-family: 'Roboto';
    color: #02254d;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    &::placeholder {
      font-size: 12px;
      color: #02254d;
      color: ${(props) => (props.error ? '#941616' : 'auto')};
      opacity: ${(props) => (props.error ? 1 : 'auto')};
    }
  }
  .MuiFormLabel-root {
    font-weight: 500;
    color: #6c7f87;
    font-size: 12px;
    line-height: 16px;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #02254d;
  }

  .MuiInput-underline {
    border-bottom-width: 2px;
    &:before {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
    &:after {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
    &:hover {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: #6c7f87;
    border-bottom-width: 2px;
  }

  .MuiInput-underline.Mui-focused {
    border-bottom-color: #02254d;
    border-bottom-width: 3px;

    &:after {
      border-bottom-color: #02254d;
      border-bottom-width: 3px;
    }
    &:before {
      border-bottom-color: #02254d;
      border-bottom-width: 3px;
    }
  }

  .MuiFormLabel-root.Mui-error {
    color: #6c7f87;
  }

  .MuiInput-underline.Mui-error {
    &:after {
      border-bottom-color: #941616;
      border-bottom-width: 3px;
    }
  }

  .MuiInputLabel-shrink {
    transform: translate(0, 1.5px) scale(1);
  }
`;

const MarginRight8Px = styled.div`
  margin-right: 8px;
`;

const MarginBottom20Px = styled.div`
  margin-bottom: 0px;
`;

type Props = {
  error?: boolean;
  card?: string;
};

const InputAdornment = styled(InputAdornmentMui)<Props>`
  p {
    color: ${(props) => (props.error ? '#941616' : 'auto')};
  }
`;

type DebtInputCardProps = {
  setError?: (any) => {};
  register?: (any) => any;
  errors?: any;
  card?: string;
  index?: number;
};

const DebtInputCard = ({
  index,
  card,
  register,
  errors,
  setError,
}: DebtInputCardProps) => {
  const [state, setState] = React.useState({
    card,
  });

  useEffect(() => {
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      setError(false);
    } else {
      setError(true);
    }
    if (state.card != card) {
      setState({
        card,
      });
    }
  }, [errors, card]);

  const handleChange = (event) => {
    setState({
      card: event.target.value,
    });
  };
  return (
    <DebtCard>
      <DebtHeader>
        <Flex>
          <TextMedium size="14px" lh="1" color="#fff">
            Debt Account Type
          </TextMedium>

          <FormControl>
            <NativeSelect
              id="select"
              value={state.card}
              onChange={handleChange}
              IconComponent={ExpandMoreIcon}
              name="debtType"
              inputProps={{ 'aria-label': 'debtType' }}
            >
              <option value={'creditCard'}>Credit Card</option>
              <option value={'studentLoan'}>Student loan</option>
              <option value={'autoLoan'}>Auto loan</option>
              <option value={'medicalBill'}>Medical bill</option>
              <option value={'personalLoan'}>Personal loan</option>
              <option value={'others'}>Others </option>
            </NativeSelect>
          </FormControl>
        </Flex>
      </DebtHeader>
      <DebtCardContent>
        <CardInput
          name={`${state.card}[${index}].cardName`}
          label={
            state.card === 'creditCard'
              ? 'Credit card name, example- Citi DoubleCash'
              : 'Lender name, example- Sofi'
          }
          margin="dense"
          inputRef={register}
          placeholder={
            errors && errors[`${state.card}[${index}].cardName`]
              ? 'Required field'
              : ''
          }
          InputLabelProps={{ shrink: true }}
          fullWidth
          error={errors && errors[`${state.card}[${index}].cardName`]}
        />
        <MarginBottom20Px />
        <Flex>
          <CardInput
            label="Balance"
            name={`${state.card}[${index}].balance`}
            margin="dense"
            inputRef={register({
              required: true,
              pattern: /^(0|[1-9][0-9]*)$/,
            })}
            placeholder={
              errors &&
              errors[`${state.card}`] &&
              errors[`${state.card}`][`${index}`].balance
                ? 'Required field'
                : ''
            }
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            error={
              errors &&
              errors[`${state.card}`] &&
              errors[`${state.card}`][`${index}`].balance
            }
          />
          <MarginRight8Px />

          <CardInput
            label="Interest rate (APR)"
            name={`${state.card}[${index}].interestRate`}
            margin="dense"
            inputRef={register({
              required: true,
              pattern: /^(0|[1-9][0-9]*)$/,
            })}
            placeholder={
              errors &&
              errors[`${state.card}`] &&
              errors[`${state.card}`][`${index}`].interestRate
                ? 'Required field'
                : ''
            }
            InputLabelProps={{ shrink: true }}
            error={
              errors &&
              errors[`${state.card}`] &&
              errors[`${state.card}`][`${index}`].interestRate
            }
          />
        </Flex>
        <MarginBottom20Px />
        <Flex>
          <div>
            {errors &&
              errors[`${state.card}`] &&
              errors[`${state.card}`][`${index}`].balance && (
                <Text size="10px" color="#941616">
                  Only numbers
                </Text>
              )}
          </div>
          <div>
            {errors &&
              errors[`${state.card}`] &&
              errors[`${state.card}`][`${index}`].interestRate && (
                <Text size="10px" color="#941616">
                  Only numbers
                </Text>
              )}
          </div>
        </Flex>

        <CardInput
          label="Minimum monthly payment"
          name={`${state.card}[${index}].minMonthlyPayment`}
          margin="dense"
          inputRef={register({ required: true })}
          placeholder={
            errors &&
            errors[`${state.card}`] &&
            errors[`${state.card}`][`${index}`].minMonthlyPayment
              ? 'Required field'
              : ''
          }
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          error={
            errors &&
            errors[`${state.card}`] &&
            errors[`${state.card}`][`${index}`].minMonthlyPayment
          }
          fullWidth
        />
        <div>
          {errors &&
            errors[`${state.card}`] &&
            errors[`${state.card}`][`${index}`].minMonthlyPayment && (
              <Text size="10px" color="#941616">
                Only numbers
              </Text>
            )}
        </div>
      </DebtCardContent>
    </DebtCard>
  );
};

const PaddingWrapper = styled.div`
  padding: 0px 20px;
`;

const IconButton = styled(Button)`
  &.MuiButton-root {
    padding: 0;
    line-height: normal;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const RemoveCardButton = (props) => {
  const context = useContext(MainContext);
  const removeCard = () => {
    context.dispatch({ type: 'removeCard', value: props.index });
  };

  return (
    <IconButton
      startIcon={<RemoveCard width="15px" />}
      onClick={() => removeCard()}
    >
      <TextMedium size="12px" color="#14cc8c">
        Delete account
      </TextMedium>
    </IconButton>
  );
};

const AddCardButton = (props) => {
  const context = useContext(MainContext);
  const addCard = () => {
    context.dispatch({
      type: 'addCard',
      value: { card: props.card, index: props.index },
    });
  };

  return (
    <IconButton startIcon={<AddCard width="15px" />} onClick={() => addCard()}>
      <TextMedium size="12px" color="#14cc8c">
        Add account
      </TextMedium>
    </IconButton>
  );
};

const AddRemoveButtons = (props) => {
  return (
    <PaddingWrapper>
      <Flex>
        <AddCardButton {...props} />
        <RemoveCardButton {...props} />
      </Flex>
    </PaddingWrapper>
  );
};

const DebtCardWithButton = (props) => {
  return (
    <DebtCardAndButtons>
      <DebtInputCard {...props} />
      <AddRemoveButtons {...props} />
    </DebtCardAndButtons>
  );
};

DebtCardWithButton.defaultProps = {};

export default DebtCardWithButton;
