import * as React from 'react';
import Footer from 'components/Footer';
import { CustomSeparatorPl } from 'components/BreadCrumbs';
import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import {
  NeedHeader,
  NeedDescriptionPersonnalLoan,
  NeedUserInput,
  NeedUserInputPersonnalLoan,
} from 'components/NeedComponents';
import { Text, TextBold } from 'components/Typography';
const PersonnalLoan: CredelloFC = () => {
  return (
    <div>
      <CustomSeparatorPl mb="18px" color="#ccc" />
      <TextBold size="24px" lh="28px" color="#02254d" mb="20px">
        Compare personal loans
      </TextBold>
      <Text size="14px" lh="18px" color="#6c7f87" mb="16px">
        Answer 5 simple questions and get a custom recommendation
      </Text>
      <NeedUserInputPersonnalLoan />
      <NeedDescriptionPersonnalLoan />
      <Footer background="#fff" />
    </div>
  );
};
PersonnalLoan.layout = Layout;
export default PersonnalLoan;
