import React, { useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { MainContext } from 'libs/context';
import Button from '@material-ui/core/Button';
import { FullWidthWrapper } from 'components/LayoutComponents';
import Link from 'next/link';
import { StyledButton } from 'components/Buttons';
import { Text, TextBold } from 'components/Typography';
import Check from '../assets/svgs/check.svg';
import CreditCard from '../assets/svgs/dc01.svg';
import AutoLoan from '../assets/svgs/dc02.svg';
import StudentLoan from '../assets/svgs/dc03.svg';
import MedicalBill from '../assets/svgs/dc04.svg';
import PersonalLoan from '../assets/svgs/dc05.svg';
import Others from '../assets/svgs/dc06.svg';

import { device } from '../libs/device';

const InlineDiv = styled.div`
  display: flex;
  align-items: flex-start;
  svg {
    margin-right: 8px;
    margin-top: 5px;
  }
`;

type ComponentProps = {
  mb?: string;
};

const Wrapper = styled.div<ComponentProps>`
  margin-bottom: ${({ mb }) => (mb ? mb : `0`)};
`;

export const NeedHeader = ({ mb }: ComponentProps) => {
  return (
    <Wrapper mb={mb}>
      <TextBold size="24px" lh="28px" color="#02254d" mb="20px">
        Find the best debt consolidation option for you
      </TextBold>
      <InlineDiv>
        <Check width="16px" fill="#15db95" />
        <Text size="14px" lh="18px" color="#6c7f87" mb="16px">
          Side-by-side comparison of all consolidation options
        </Text>
      </InlineDiv>
      <InlineDiv>
        <Check width="16px" fill="#15db95" />
        <Text size="14px" lh="18px" color="#6c7f87" mb="24px">
          Match score based on your unique needs
        </Text>
      </InlineDiv>
      <Link href="/">
        <Text size="14px" lh="16px" color="#14cc8c" ml="24px" underline>
          How this works
        </Text>
      </Link>
    </Wrapper>
  );
};

type GreenButtonProps = {
  selected?: boolean;
};

const GreenButtonBox = styled(Button)<GreenButtonProps>`
  &.MuiButton-contained {
    display: flex;
    justify-content: center;
    align-content: center;
    background: ${({ selected }) => (selected ? '#15db95' : '#85a3b8')};
    color: #fff;
    text-transform: none;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 10px;
    &:hover {
      background-color: ${({ selected }) => (selected ? '#15db95' : '#85a3b8')};
    }
    div {
      display: grid;
      text-align: center;
      align-content: center;
      justify-content: center;
      grid-gap: 10px;
    }
    &:before {
      content: '';
      display: block;
      height: 0px;
      width: 0px;
      padding-bottom: calc(94 / 126 * 100%);
    }
  }
`;

const ManageDebtGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media ${device.tablet} {
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media ${device.laptop} {
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const DivText = styled(TextBold)`
  max-width: 80px;
`;

const GridWrapper = styled.div`
  display: grid;
  margin-top: calc(46px - 16px);
  margin-bottom: 24px;
`;

const GridTwoButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-bottom: 32px;
`;

const ToggleButton = ({ name, icon, selected, onClick }) => {
  return (
    <GreenButtonBox
      variant="contained"
      selected={selected}
      onClick={onClick}
      disableElevation
    >
      <div>
        <div>{icon}</div>
        <DivText size="12px" center>
          {name}
        </DivText>
      </div>
    </GreenButtonBox>
  );
};

export const NeedUserInput = React.memo(() => {
  const context = useContext(MainContext);
  const router = useRouter();
  const [debtType, setDebtType] = React.useState(
    context && context.appState && context.appState.userDebts
  );
  const [checkNumCC, setCheckNumCC] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleDebtSelect = (newDebtType) => {
    let selectedDebts;
    const alreadySelected = debtType.find((dt) => dt === newDebtType);

    if (typeof alreadySelected === 'undefined') {
      selectedDebts = [...debtType, newDebtType];
    } else {
      selectedDebts = debtType.filter((dt) => dt != newDebtType);
    }

    setDebtType(selectedDebts);
    context.dispatch({ type: 'userDebts', value: selectedDebts });
  };

  const handleNext = (e, goAhead) => {
    e && e.preventDefault();
    if (debtType.length > 1 || (debtType.length === 1 && goAhead)) {
      router.push('/debt-details');
    } else if (debtType.length === 1 && debtType.indexOf('creditCard') > -1) {
      setCheckNumCC(true);
    }
  };

  return (
    <div>
      <div style={{ padding: '16px' }}>
        <TextBold size="16px" color="#02254d" lh="20px" mb="35px">
          What debt do you want to consolidate?
        </TextBold>
        <ManageDebtGrid>
          <ToggleButton
            name="Credit cards"
            icon={<CreditCard width="26px" />}
            selected={debtType.indexOf('creditCard') > -1}
            onClick={() => handleDebtSelect('creditCard')}
          />
          <ToggleButton
            name="Auto Loan"
            icon={<AutoLoan width="24px" />}
            selected={debtType.indexOf('autoLoan') > -1}
            onClick={() => handleDebtSelect('autoLoan')}
          />
          <ToggleButton
            name="Student loan"
            icon={<StudentLoan width="27px" />}
            selected={debtType.indexOf('studentLoan') > -1}
            onClick={() => handleDebtSelect('studentLoan')}
          />
          <ToggleButton
            name="Medical bill"
            icon={<MedicalBill width="19px" />}
            selected={debtType.indexOf('medicalBill') > -1}
            onClick={() => handleDebtSelect('medicalBill')}
          />
          <ToggleButton
            name="Peronal loan"
            icon={<PersonalLoan width="30px" />}
            selected={debtType.indexOf('personalLoan') > -1}
            onClick={() => handleDebtSelect('personalLoan')}
          />
          <ToggleButton
            name="Others"
            icon={<Others width="24px" />}
            selected={debtType.indexOf('others') > -1}
            onClick={() => handleDebtSelect('others')}
          />
        </ManageDebtGrid>

        <Text size="14px" color="#6c7f87" mt="16px" center>
          Select Multiple
        </Text>
      </div>
      <GridWrapper>
        <StyledButton
          bg="#15db95"
          variant="contained"
          onClick={(e) => handleNext(e, false)}
          disableElevation
          disabled={
            !(
              debtType &&
              (debtType.length > 1 ||
                (debtType.indexOf('creditCard') > -1 && !checked))
            )
          }
        >
          <TextBold size="14px" color="#fff">
            Next Step
          </TextBold>
        </StyledButton>
      </GridWrapper>

      {checkNumCC && (
        <>
          <Text size="14px" lh="20px" color="#6c7f87" mb="16px">
            Do you have more than one credit card debt?{' '}
          </Text>
          <GridTwoButtons>
            <StyledButton
              bg="#15db95"
              variant="contained"
              disableElevation
              onClick={(e) => {
                setChecked(true);
                handleNext(e, true);
              }}
              disabled={checked}
            >
              <TextBold size="14px" color="#fff">
                Yes
              </TextBold>
            </StyledButton>
            <StyledButton
              bg="#15db95"
              variant="contained"
              disableElevation
              onClick={() => setChecked(true)}
              disabled={checked}
            >
              <TextBold size="14px" color="#fff">
                No
              </TextBold>
            </StyledButton>
          </GridTwoButtons>
          {checked && (
            <Text size="14px" lh="20px" color="#6c7f87" mb="27px">
              Debt Consolidation requires more than one debt account. Please
              select at least two debt types above.
            </Text>
          )}
        </>
      )}
    </div>
  );
});

export const NeedUserInputPersonnalLoan = React.memo(() => {
  const context = useContext(MainContext);
  const router = useRouter();
  const [personalLoan, setpersonalLoan] = React.useState([
    'creditCard',
    'consolidateDebt',
    'bigPurchase',
    'payOffCreditCard',
  ]);
  const [checkNumCC, setCheckNumCC] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleDebtSelect = (newpersonalLoan) => {
    let selectedDebts;
    const alreadySelected = personalLoan.find((dt) => dt === newpersonalLoan);

    if (typeof alreadySelected === 'undefined') {
      selectedDebts = [...personalLoan, newpersonalLoan];
    } else {
      selectedDebts = personalLoan.filter((dt) => dt != newpersonalLoan);
    }

    setpersonalLoan(selectedDebts);
    context.dispatch({ type: 'userDebts', value: selectedDebts });
  };

  const handleNext = (e, goAhead) => {
    e && e.preventDefault();
    if (personalLoan.length > 1 || (personalLoan.length === 1 && goAhead)) {
      router.push('/personnal-loan-details');
    } else if (
      personalLoan.length === 1 &&
      personalLoan.indexOf('creditCard') > -1
    ) {
      setCheckNumCC(true);
    }
  };
  return (
    <div>
      <div style={{ padding: '16px' }}>
        <TextBold size="16px" color="#02254d" lh="20px" mb="35px">
          What do you need a personal loan for?
        </TextBold>

        <Text size="14px" color="#6c7f87" mt="16px" mb="27px" center>
          Please Choose One :
        </Text>

        <ManageDebtGrid>
          <ToggleButton
            name="Consolidate debt"
            icon={<AutoLoan width="24px" />}
            selected={personalLoan.indexOf('consolidateDebt') > -1}
            onClick={() => handleDebtSelect('consolidateDebt')}
          />
          <ToggleButton
            name="Pay off credit cards"
            icon={<CreditCard width="26px" />}
            selected={personalLoan.indexOf('payOffCreditCard') > -1}
            onClick={() => handleDebtSelect('payOffCreditCard')}
          />

          <ToggleButton
            name="Renovate home"
            icon={<StudentLoan width="27px" />}
            selected={personalLoan.indexOf('renovateHome') > -1}
            onClick={() => handleDebtSelect('renovateHome')}
          />

          <ToggleButton
            name="Cover for emergency"
            icon={<MedicalBill width="19px" />}
            selected={personalLoan.indexOf('coverForEmergency') > -1}
            onClick={() => handleDebtSelect('coverForEmergency')}
          />
          <ToggleButton
            name="Make a big purchase"
            icon={<PersonalLoan width="30px" />}
            selected={personalLoan.indexOf('bigPurchase') > -1}
            onClick={() => handleDebtSelect('bigPurchase')}
          />
          <ToggleButton
            name="Others"
            icon={<Others width="24px" />}
            selected={personalLoan.indexOf('others') > -1}
            onClick={() => handleDebtSelect('others')}
          />
        </ManageDebtGrid>
      </div>
      <GridWrapper>
        <StyledButton
          bg="#15db95"
          variant="contained"
          onClick={(e) => handleNext(e, false)}
          disableElevation
          disabled={
            !(
              personalLoan &&
              (personalLoan.length > 1 ||
                (personalLoan.indexOf('creditCard') > -1 && !checked))
            )
          }
        >
          <TextBold size="14px" color="#fff">
            Next Step
          </TextBold>
        </StyledButton>
      </GridWrapper>
    </div>
  );
});
const LightPurpleBackground = styled(FullWidthWrapper)`
  background: #f3f4fd;
  padding-top: 51px;
  padding-bottom: 47px;
`;

export const NeedDescription = () => {
  return (
    <LightPurpleBackground>
      <TextBold size="14px" color="#02254d" lh="20px">
        What is Debt Consolidation?
      </TextBold>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        Debt Consolidation is the financial strategy of combining multiple debts
        into a single lower interest and manageable payment. Unsecured debts
        like credit card balances and medical bills have high interest rates and
        reorganizing them into a single lower interest loan can save you money
        and help you pay them off faster.
      </Text>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        Reasons for consolidation can be different for each individual- you
        could want to pay off loans faster, or build some room in your monthly
        budget by lowering your payments, or reduce the hassle of keeping track
        of multiple bills.
      </Text>
      <TextBold size="14px" color="#02254d" lh="20px">
        Should I Consolidate?
      </TextBold>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        Consolidating debt into a less expensive product, in terms of either
        total interest or monthly payments, could be a good strategy depending
        upon your end goal.
      </Text>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        You would need a product offer that has a lower interest rate or
        favorable repayment timelines. Good rate offers for unsecured
        consolidation loans like personal loans & balance transfer cards, would
        likely require good credit. And, for secured loans like home equity
        loans and 401k loans, you are guaranteed lower interest loans, but you
        would risk your home or savings.
      </Text>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        Ultimately, the decision to consolidate or not, will depend on your end
        savings from consolidation – either in monthly payments, or interest or
        time to be debt-free.
      </Text>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        After viewing products matched to you, you can compare further with our
        debt consolidation calculator and get an estimate of potential savings.
      </Text>
    </LightPurpleBackground>
  );
};

export const NeedDescriptionPersonnalLoan = () => {
  return (
    <LightPurpleBackground>
      <TextBold size="14px" color="#02254d" lh="20px">
        When to consider a personal loan Personal
      </TextBold>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        Personal loans are mainly used for debt consolidation, emergencies, home
        renovations, or major events, like a wedding or vacation. In any of
        these cases, you likely need cash quickly, and a personal loan could be
        a good option.
      </Text>

      <TextBold size="14px" color="#02254d" lh="20px">
        Decide how much to borrow
      </TextBold>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        Figure out the amount that will cover what you need, but also make sure
        that number fits your budget. Taking on a personal loan is an added
        expense every month, and you don’t want to break the bank to get one
      </Text>

      <TextBold size="14px" color="#02254d" lh="20px">
        Where to apply for a personal loan
      </TextBold>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        The best place to apply for a personal loan depends on several factors.
        How much you need, your credit score, your debt-to-income ratio, your
        income, and the length of your loan all come into play.
      </Text>
      <TextBold size="14px" color="#02254d" lh="20px">
        Determine your eligibility
      </TextBold>
      <Text size="14px" color="#6c7f87" lh="20px" mb="24px">
        Each lender will have different eligibility requirements. For instance,
        it’s common to need at least three years of credit history to be
        eligible for a loan. Figure out if there’s a minimum for your credit
        score, income, and debt-to-income ratio. This can help you eliminate
        certain lenders right off the bat.
      </Text>
    </LightPurpleBackground>
  );
};
