import React, { useContext, useState, MutableRefObject } from 'react';
import { MainContext } from 'libs/context';
import DebtInputCard from 'components/DebtInputCard';
import { useForm } from 'react-hook-form';
import { Text } from 'components/Typography';
import { StyledFormBgWrapper } from 'components/LayoutComponents';

type Props = {
  submitRef?: MutableRefObject<any>;
  onSubmit?: (any) => void;
};

const DebtAccountTypes = React.memo((props: Props) => {
  const context = useContext(MainContext);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const { appState } = context;
  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      ref={(form) => (props.submitRef.current = form)}
    >
      <StyledFormBgWrapper>
        {appState &&
          appState.userDebts &&
          appState.userDebts.map((c, index) => {
            return (
              <DebtInputCard
                key={index}
                index={index}
                card={c}
                setError={setError}
                register={register}
                errors={errors}
                {...props}
              />
            );
          })}
        {error && (
          <Text size="14px" lh="16px" color="#941616">
            Please fill missing fields above
          </Text>
        )}
      </StyledFormBgWrapper>
    </form>
  );
});

export default DebtAccountTypes;
