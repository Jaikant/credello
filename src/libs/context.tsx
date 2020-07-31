import React from 'react';

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
  };
  dispatch: ({ type: string, value: any }) => void;
};

export const MainContext = React.createContext<Partial<ContextType>>({});

export const initialState = {
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
    const debtFreeDate = `06/2024`;

    if (state.debtDetails) {
      for (const debtKind in state.debtDetails) {
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
