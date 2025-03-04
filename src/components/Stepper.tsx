import React from 'react';
import styled from 'styled-components';
import { TextMedium } from 'components/Typography';

function getSteps() {
  return ['Debt details', 'Preferences', 'Financial health', 'Home details'];
}
function getStepsPl() {
  return ['Debt details', 'Preferences', 'Financial health'];
}

type PropsStep = {
  index?: number;
  active?: number;
};

const Step = styled.div<PropsStep>`
  height: 6px;
  background: ${({ active, index }) =>
    index < active ? '#02254d' : '#d8d9da'};
  flex: 1;
  margin-right: 6px;
`;

const Stepper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 12px;
`;

type Props = {
  padMultiple?: number;
};

const LabelSteps = styled.div<Props>`
  padding-left: ${({ padMultiple }) => `calc(24% * ${padMultiple})`};
  letter-spacing: 0em;
`;

type ComponentProps = {
  mb?: string;
  active?: number;
  pl?: boolean;
};

type WrappeProps = {
  mb?: string;
};

const StepperWrapper = styled.div<WrappeProps>`
  margin-bottom: ${({ mb }) => (mb ? mb : `0`)};
`;
export default function CustomizedSteppers(props: ComponentProps) {
  const { active, mb, pl } = props;
  const steps = pl ? getStepsPl() : getSteps();
  return (
    <StepperWrapper mb={mb}>
      <Stepper>
        {steps.map((_, index) => (
          <Step key={index} active={active} index={index} />
        ))}
      </Stepper>
      {!pl && (
        <LabelSteps padMultiple={active - 1}>
          <TextMedium size="14px" color="#6c7f87">
            {steps[active - 1]}{' '}
          </TextMedium>
        </LabelSteps>
      )}
    </StepperWrapper>
  );
}
