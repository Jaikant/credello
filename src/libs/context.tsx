import React from 'react';
import { constants } from 'crypto';

type ContextType = {
  appState: {
    userDebts: [string];
    noCreditCards: number;
    debtDetails: { string: [any] };
    preference: string;
    creditScore: number;
    monthlyIncome: string;
    payoffAbility: boolean;
    homeOwner: boolean;
    homeValue: string;
    homeZipcode: string;
    outstandingMortgage: string;
    mortgageInterest: number;
    mortgageYear: string;
    mortgageTerm: string;
    debtSummary: {
      debtAmount: number;
      combinedInterest: number;
      monthylyPayment: number;
      debtFreeDate: string;
      totalInterest: number;
    };
    userPersonnalLoan: [string];
  };
  dispatch: ({ type: string, value: any }) => void;
};

export const MainContext = React.createContext<Partial<ContextType>>({});

export const initialState = {
  userPersonnalLoan: [],
  userDebts: [],
  noCreditCards: 0,
  debtDetails: null,
  preference: null,
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
  payment?: number;
  present: number;
  future?: number;
  type?: number;
};

const monthFromNow = (timeToDebtFree) => {
  const debtFreeDate = new Date();
  debtFreeDate.setMonth(debtFreeDate.getMonth() + Math.abs(timeToDebtFree));
  return debtFreeDate;
};

const nper = ({ rate, payment, present, future, type }: NperProp) => {
  type = typeof type === 'undefined' ? 0 : type;
  future = typeof future === 'undefined' ? 0 : future;
  if (present == 0 || payment == 0) {
    return 0;
  }
  rate = rate / (payment * 100);
  let nperValue = 0;
  if (rate == 0) {
    nperValue = -(future + present) / payment;
  } else {
    nperValue =
      Math.log((-future * rate + payment) / (payment + rate * present)) /
      Math.log(1 + rate);
  }
  return Math.ceil(nperValue);
};

const syncUserDebt = (state) => {
  if (state.debtDetails && state.debtDetails.length > 0) {
    const userDebts = state.debtDetails.map((dt) => dt.debtType);
    return userDebts.filter((dt, index) => userDebts.indexOf(dt) === index);
  }
  return state.userDebts;
};

export const reducer = (state, action) => {
  const calculateDebtSummary = () => {
    let debtAmount = 0;
    let monthylyPayment = 0;
    let combinedInterest = 0;
    // const debtFreeDate = `06/2024`;

    if (state.debtDetails && state.debtDetails.length > 0) {
      state.debtDetails.map((debt) => {
        const balance = debt.balance.split(',').join('');
        const minMonthlyPayment = debt.minMonthlyPayment.split(',').join('');
        const numerator: number =
          combinedInterest * debtAmount +
          parseInt(debt.interestRate) * parseInt(balance);
        combinedInterest = numerator / (debtAmount + parseInt(balance));
        debtAmount = debtAmount + parseInt(balance);
        monthylyPayment = monthylyPayment + parseInt(minMonthlyPayment);
      });
    }

    const totalInterest = `26,500`;
    const rate = combinedInterest / 12;
    const payment = 0 - monthylyPayment;
    const present = 0 - debtAmount;

    // current time to debt free
    const timeToDebtFree = nper({
      rate,
      payment,
      present,
      type: 0,
    });

    const debtFree = monthFromNow(timeToDebtFree);
    const debtFreeMonth = debtFree.getMonth() + 1;
    const debtFreeYear = debtFree.getFullYear();
    const debtFreeDate = `${debtFreeMonth}/${debtFreeYear}`;

    return {
      debtAmount,
      monthylyPayment,
      combinedInterest,
      debtFreeDate,
      totalInterest,
    };
  };

  switch (action.type) {
    case 'userDebts': {
      let debtDetails = [];
      if (state.debtDetails) {
        debtDetails = [...state.debtDetails];
        action.value.map((dt, index) => {
          const found = state.debtDetails.findIndex((el) => dt === el.debtType);
          if (found == -1) {
            debtDetails.push({
              debtType: dt,
            });
            return null;
          } else {
            // Already exists ignore
            return null;
          }
        });
      } else {
        debtDetails = action.value.map((dt, index) => ({
          debtType: dt,
        }));
      }

      return { ...state, userDebts: action.value, debtDetails };
    }
    case 'addCard': {
      state.debtDetails.splice(action.value.index, 0, {
        debtType: action.value.card,
      });
      const userDebts = syncUserDebt(state);
      return { ...state, userDebts };
    }
    case 'removeCard': {
      state.debtDetails.splice(action.value, 1);
      const userDebts = syncUserDebt(state);
      return { ...state, userDebts };
    }
    case 'debtDetails': {
      const debtDetails = Object.keys(action.value).map((c) => action.value[c]);
      return { ...state, debtDetails };
    }
    case 'debtSummary': {
      const debtSummary = calculateDebtSummary();
      const userDebts = syncUserDebt(state);
      return { ...state, debtSummary, userDebts };
    }
    case 'creditScore': {
      return { ...state, creditScore: action.value };
    }
    case 'payoffAbility': {
      return { ...state, payoffAbility: action.value };
    }
    case 'homeOwner': {
      return { ...state, homeOwner: action.value };
    }
    case 'preference': {
      return { ...state, preference: action.value };
    }
    case 'homeValue': {
      return { ...state, homeValue: action.value };
    }
    default:
      return { ...state, [action.type]: action.value };
    // throw new Error();
  }
};
