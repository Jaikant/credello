import React, { useEffect, useContext } from 'react';
import { MainContext } from 'libs/context';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveCard from '../assets/svgs/ico_remove.svg';
import AddCard from '../assets/svgs/ico_add.svg';
import { TextMedium, Text } from 'components/Typography';
import {
  FormControl,
  NativeSelect,
  CardInput,
  InputAdornment,
} from 'components/Forms';

const DebtCardAndButtons = styled.div`
  display: grid;
  grid-gap: 16px;
  padding-bottom: 46px;
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

const MarginRight8Px = styled.div`
  margin-right: 8px;
`;

const MarginBottom20Px = styled.div`
  margin-bottom: 0px;
`;

type DebtInputCardProps = {
  register?: (any) => any;
  errors?: any;
  card?: string;
  index?: number;
  values?: any;
};

const DebtInputCard = ({
  index,
  card,
  register,
  errors,
  values,
}: DebtInputCardProps) => {
  const [state, setState] = React.useState({
    debtType: card,
    balance: values && values.balance,
    cardName: values && values.cardName,
    interestRate: values && values.interestRate,
    minMonthlyPayment: values && values.minMonthlyPayment,
  });

  useEffect(() => {
    if (state.debtType != card) {
      setState({
        ...state,
        debtType: card,
      });
    }
  }, [errors, card]);

  const handleChange = (event) => {
    const property = event.target.name.split('.')[1];
    setState({
      ...state,
      [property]: event.target.value,
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
              value={state.debtType}
              onChange={handleChange}
              inputRef={register}
              IconComponent={ExpandMoreIcon}
              name={`${index}.debtType`}
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
          name={`${index}.cardName`}
          value={state.cardName}
          onChange={handleChange}
          label={
            state.debtType === 'creditCard'
              ? 'Credit card name, example- Citi DoubleCash'
              : 'Lender name, example- Sofi'
          }
          margin="dense"
          inputRef={register}
          placeholder={
            errors && errors[`${index}`] && errors[`${index}`].cardName
              ? 'Required field'
              : ''
          }
          InputLabelProps={{ shrink: true }}
          fullWidth
          error={errors && errors[`${index}`] && errors[`${index}`].cardName}
        />
        <MarginBottom20Px />
        <Flex>
          <CardInput
            label="Balance"
            name={`${index}.balance`}
            value={state.balance}
            onChange={handleChange}
            margin="dense"
            inputRef={register({
              required: true,
              pattern: /^(0|[1-9][0-9]*)$/,
            })}
            placeholder={
              errors && errors[`${index}`] && errors[`${index}`].balance
                ? 'Required field'
                : ''
            }
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            error={errors && errors[`${index}`] && errors[`${index}`].balance}
          />
          <MarginRight8Px />

          <CardInput
            label="Interest rate (APR)"
            name={`${index}.interestRate`}
            value={state.interestRate}
            onChange={handleChange}
            margin="dense"
            inputRef={register({
              required: true,
              pattern: /^(0|[1-9][0-9]*)$/,
            })}
            placeholder={
              errors && errors[`${index}`] && errors[`${index}`].interestRate
                ? 'Required field'
                : ''
            }
            InputLabelProps={{ shrink: true }}
            error={
              errors && errors[`${index}`] && errors[`${index}`].interestRate
            }
          />
        </Flex>
        <MarginBottom20Px />
        <Flex>
          <div>
            {errors && errors[`${index}`] && errors[`${index}`].balance && (
              <Text size="10px" color="#941616">
                Only numbers
              </Text>
            )}
          </div>
          <div>
            {errors && errors[`${index}`] && errors[`${index}`].interestRate && (
              <Text size="10px" color="#941616">
                Only numbers
              </Text>
            )}
          </div>
        </Flex>

        <CardInput
          label="Minimum monthly payment"
          name={`${index}.minMonthlyPayment`}
          value={state.minMonthlyPayment}
          onChange={handleChange}
          margin="dense"
          inputRef={register({ required: true })}
          placeholder={
            errors && errors[`${index}`] && errors[`${index}`].minMonthlyPayment
              ? 'Required field'
              : ''
          }
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          error={
            errors && errors[`${index}`] && errors[`${index}`].minMonthlyPayment
          }
          fullWidth
        />
        <div>
          {errors &&
            errors[`${index}`] &&
            errors[`${index}`].minMonthlyPayment && (
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
