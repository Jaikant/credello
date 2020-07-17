import Layout from 'components/Layout';
import styled from 'styled-components';
import { CredelloFC } from 'libs/types';
import Header from 'components/Header';
import CompareProducts from 'components/CompareProducts';
import PopularCalculators from 'components/PopularCalculators';
import FeaturedArticles from 'components/FeaturedArticles';
import ArticleGrid from 'components/ArticleGrid';
import SectionWithButton from 'components/SectionWithButton';
import Footer from 'components/Footer';

const StyledWrapper = styled.div``;

export const Home: CredelloFC = () => (
  <div>
    <Header />
    <CompareProducts />
    <PopularCalculators />
    <FeaturedArticles />
    <ArticleGrid />
    <SectionWithButton />
    <Footer />
  </div>
);

Home.layout = Layout;
export default Home;
