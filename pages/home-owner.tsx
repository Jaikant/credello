import { useContext, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import { MainContext } from 'libs/context';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { Text, TextBold, TextMedium } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import { CardInput, InputAdornment } from 'components/Forms';
import { useForm } from 'react-hook-form';
import { StyledButton } from 'components/Buttons';
const Wrapper = styled.div`
  display: grid;
  margin-top: calc(46px - 16px);
  margin-bottom: 100px;
`;
export const HomeOwner: CredelloFC = () => {
  const router = useRouter();
  const submitRef = useRef<HTMLFormElement | null>();
  const context = useContext(MainContext);
  const { register, handleSubmit, errors } = useForm();
  const { appState } = context;
  const [homeValue, setHomeValue] = useState(appState && appState.homeValue);

  const onSubmit = (data) => {
    //add this data to context and navigate.
    context.dispatch({ type: 'homeValue', value: data.homeValue });
    router.push('/debt-consolidation-mortgage');
  };

  const handleChange = (event) => {
    setHomeValue(event.target.value);
    context.dispatch({ type: 'homeValue', value: event.target.value });
  };

  return (
    <div>
      <BreadCrumbs mb="18px" />
      <Stepper active={4} mb="30px" />
      <TextBold color="#02254d" mb="16px" lh="22px">
        What is the estimated value of your home?
      </TextBold>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={(form) => (submitRef.current = form)}
      >
        <CardInput
          name="homeValue"
          value={
            homeValue &&
            homeValue.match(/\d+/g) &&
            Number(homeValue.match(/\d+/g).join('')).toLocaleString('us-US')
          }
          onChange={handleChange}
          label={'Estimated home value'}
          margin="dense"
          inputRef={register({
            required: true,
            pattern: /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)$/,
          })}
          placeholder={errors && errors.homeValue ? 'Required field' : ''}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          fullWidth
          error={errors && errors.homeValue}
        />
      </form>
      <TextBold color="#02254d" lh="22px" mb="44px" mt="48px">
        Not sure about your home value?{' '}
      </TextBold>
      <TextMedium size="14px" color="#15db95" mb="22px">
        Detect my location
      </TextMedium>
      <Text size="14px" lh="22px" color="#03264e" mb="32px">
        Average home value in your zip code:{' '}
        <TextBold size="14px" as="span">
          {` 07310 `}
        </TextBold>
        is
        <TextBold size="14px" as="span">
          {` $250,000 `}
        </TextBold>
      </Text>
      <Wrapper>
        <StyledButton
          bg={'#85a3b8'}
          variant="contained"
          // onClick={(e) => {}}
          disableElevation
          disabled={false}
          fullWidth
        >
          <TextBold size="14px" color="#fff">
            Use zip code average
          </TextBold>
        </StyledButton>
      </Wrapper>

      <div>
        {errors && errors.homeValue && (
          <Text size="14px" lh="16px" color="#941616" mt="8px">
            Please fill missing fields above
          </Text>
        )}
      </div>

      <BottomBar
        left="/debt-consolidation-home-owner"
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

HomeOwner.layout = Layout;
export default HomeOwner;
