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
import { FormControl, CardInput, InputAdornment } from 'components/Forms';
import { useForm } from 'react-hook-form';

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
          value={homeValue}
          onChange={handleChange}
          label={'Estimated home value'}
          margin="dense"
          inputRef={register({
            required: true,
            pattern: /^(0|[1-9][0-9]*)$/,
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
      <div style={{ marginBottom: '72px' }}>
        {errors && errors.homeValue && (
          <Text size="14px" lh="16px" color="#941616">
            Only numbers
          </Text>
        )}
      </div>
      <div style={{ bottom: 0 }}>
        {errors && errors.homeValue && (
          <Text size="14px" lh="16px" color="#941616">
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
