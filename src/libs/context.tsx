import React from 'react';

type ContextType = {
  appState: {
    userDebts: [string];
    noCreditCards: number;
    debtDetails: { string: [any] };
    preferences: string;
    creditScore: number;
    monthlyIncome: number;
    payoffAbility: boolean;
    homeOwner: boolean;
    homeValue: number;
    homeZipcode: string;
    outstandingMortgage: number;
    mortgageInterest: number;
    mortgageYear: string;
    mortgageTerm: number;
    debtSummary: {
      debtAmount: number;
      combinedInterest: number;
      monthylyPayment: number;
      debtFreeDate: string;
      totalInterest: number;
    };
  };
  dispatch: ({ type: string, value: any }) => void;
};

export const MainContext = React.createContext<Partial<ContextType>>({});

export const initialState = {
  userDebts: [],
  noCreditCards: 0,
  debtDetails: { creditCard: [] },
  preferences: null,
  creditScore: null,
  monthlyIncome: null,
  payoffAbility: null,
  homeOwner: null,
  homeValue: null,
  homeZipcode: null,
  outstandingMortgage: null,
  mortgageInterest: null,
  mortgageYear: null,
  mortgageTerm: null,
  debtSummary: {
    debtAmount: null,
    combinedInterest: null,
    monthylyPayment: null,
    debtFreeDate: null,
    totalInterest: null,
  },
};

type NperProp = {
  rate: number;
  per?: number;
  pmt: number;
  pv?: number;
  fv?: number;
};

const nper = ({ rate, per, pmt, pv, fv }: NperProp) => {
  let nperValue: number;
  // if (per == 0 || pmt == 0) {
  //   alert('Why do you want to test me with zeros?');
  //   return 0;
  // }

  rate = rate / (per * 100);

  if (rate == 0) {
    // Interest rate is 0

    nperValue = -(fv + pv) / pmt;
  } else {
    nperValue =
      Math.log((-fv * rate + pmt) / (pmt + rate * pv)) / Math.log(1 + rate);
  }

  return nperValue;
};

export const reducer = (state, action) => {
  const calculateDebtSummary = () => {
    let debtAmount = 0;
    let monthylyPayment = 0;
    let combinedInterest = 0;
    const debtFreeDate = `06/2024`;

    if (state.debtDetails) {
      for (const debtKind in state.debtDetails) {
        // if (Object.prototype.hasOwnProperty.call(object, key)) {
        //   const element = object[key];

        // }
        const debt = state.debtDetails[debtKind];
        if (debt && debt.length > 0) {
          debt.forEach((element) => {
            // combined Interest rate: (i1*b1 + i2*b2) / (b1+b2)
            const numerator: number =
              combinedInterest * debtAmount +
              parseInt(element.interestRate) * parseInt(element.balance);
            combinedInterest =
              numerator / (debtAmount + parseInt(element.balance));

            //debtAmount
            debtAmount = debtAmount + parseInt(element.balance);

            // monthly payment
            monthylyPayment =
              monthylyPayment + parseInt(element.minMonthlyPayment);
          });
        }
      }
    }
    // let debtAmount = state.;
    const totalInterest = `26,500`;

    // current time to debt free
    const timeToDebtFree = nper({
      rate: combinedInterest,
      per: 0,
      pmt: -debtAmount,
      pv: null,
      fv: 0,
    });

    return {
      debtAmount,
      monthylyPayment,
      combinedInterest,
      debtFreeDate,
      totalInterest,
    };
  };

  switch (action.type) {
    case 'userDebts':
      return { ...state, userDebts: action.value };
    case 'addCard':
      state.userDebts.splice(action.value.index, 0, action.value.card);
      return { ...state };
    case 'removeCard':
      state.userDebts.splice(action.value, 1);
      return { ...state };
    case 'debtDetails':
      return { ...state, debtDetails: action.value };
    case 'debtSummary': {
      const debtSummary = calculateDebtSummary();
      return { ...state, debtSummary };
    }
    default:
      throw new Error();
  }
};
