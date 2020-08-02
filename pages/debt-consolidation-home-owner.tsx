import { useContext } from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import { CredelloFC } from 'libs/types';
import BreadCrumbs from 'components/BreadCrumbs';
import { Text, TextBold } from 'components/Typography';
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
      <TextBold color="#02254d" lh="22px">
        If you are a homeowner, you might have the option to consolidate with
        mortgage refinancing or home equity loans- which generally have much
        lower interest rates.
      </TextBold>
      <TextBold color="#02254d" mb="40px" lh="22px">
        Do you own a home?
      </TextBold>

      <YesOrNoButtons
        fn={updateHomeOwner}
        initial={context.appState.homeOwner}
      />
      {context && context.appState.homeOwner && (
        <Text size="14px" lh="20px" mt="32px">
          <Link href="#">
            <Text as="span" size="14px" lh="20px" color="#14cc8c">
              {`Skip home section `}
            </Text>
          </Link>
          if you don&apos;t want to explore home equity options
        </Text>
      )}

      <BottomBar
        left="/debt-consolidation-income"
        right={
          context.appState && context.appState.homeOwner
            ? '/home-owner'
            : '/404'
        }
        position="fixed"
      />
    </div>
  );
};

HomeOwner.layout = Layout;
export default HomeOwner;
