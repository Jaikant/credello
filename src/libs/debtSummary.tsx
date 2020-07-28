import { useContext } from 'react';
import { MainContext } from 'libs/context';

export const calculateDebtSummary = () => {
  const context = useContext(MainContext);
  context.dispatch({ type: 'debtSummary', value: '' });
};
