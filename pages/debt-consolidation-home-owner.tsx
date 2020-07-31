import { useContext } from 'react';
import Layout from 'components/Layout';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { TextBold } from 'components/Typography';
import Stepper from 'components/Stepper';
import BottomBar from 'components/BottomBar';
import { MainContext } from 'libs/context';
import { YesOrNoButtons } from 'components/Buttons';

export const HomeOwner: CredelloFC = () => {
  const context = useContext(MainContext);
  const updateHomeOwner = (value) =>
    context.dispatch({ type: 'homeOwner', value });

  return (
    <div>
      <BreadCrumbs mb="18px" />
      <Stepper active={4} mb="30px" />
      <TextBold color="#02254d" mb="16px" lh="22px">
        If you are a homeowner, you might have the option to consolidate with
        mortgage refinancing or home equity loans- which generally have much
        lower interest rates. Do you own a home?{' '}
      </TextBold>
      <YesOrNoButtons
        fn={updateHomeOwner}
        initial={context.appState.homeOwner}
      />

      <BottomBar
        left="/debt-consolidation-income"
        right="/home-owner"
        position="fixed"
      />
    </div>
  );
};

HomeOwner.layout = Layout;
export default HomeOwner;
