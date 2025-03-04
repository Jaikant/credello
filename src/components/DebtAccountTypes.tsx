import React, {
  useContext,
  useEffect,
  useState,
  MutableRefObject,
} from 'react';
import { MainContext } from 'libs/context';
import DebtInputCard from 'components/DebtInputCard';
import { useForm } from 'react-hook-form';
import { Text } from 'components/Typography';
import { StyledFormBgWrapper } from 'components/LayoutComponents';

type Props = {
  submitRef?: MutableRefObject<any>;
  onSubmit?: (any) => void;
};

//Dummy comment

const DebtAccountTypes = React.memo((props: Props) => {
  const context = useContext(MainContext);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const { appState } = context;

  useEffect(() => {
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      setError(false);
    } else {
      setError(true);
    }
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      ref={(form) => (props.submitRef.current = form)}
    >
      <StyledFormBgWrapper>
        {appState.debtDetails &&
          appState.debtDetails.map((c, index) => {
            return (
              <DebtInputCard
                key={index}
                index={index}
                card={appState.debtDetails[index].debtType}
                values={appState.debtDetails}
                register={register}
                errors={errors}
                {...props}
              />
            );
          })}
        <div style={{ paddingBottom: '30px' }}>
          {error && (
            <Text size="14px" lh="16px" color="#941616">
              Please fill missing fields above
            </Text>
          )}
        </div>
      </StyledFormBgWrapper>
    </form>
  );
});

export default DebtAccountTypes;
