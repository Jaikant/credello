import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import { CustomSeparatorPl } from 'components/BreadCrumbs';
import { TextBold } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import Slider from 'components/Slider';

export const PersonnalLoanScoreDetails: CredelloFC = () => {
  return (
    <div>
      <CustomSeparatorPl mb="18px" />
      <Stepper active={3} mb="30px" pl />
      <TextBold color="#02254d" mb="16px" lh="22px">
        How's your credit score these days?
      </TextBold>
      <Slider />
      <BottomBar left="/personnal-loan-location" right="/" position="fixed" />
    </div>
  );
};

PersonnalLoanScoreDetails.layout = Layout;
export default PersonnalLoanScoreDetails;
