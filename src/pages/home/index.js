import Layout from '../../components/common/layout';
import Hero from '../../components/hero';
import Main from '../../components/main';
import FeaturedCollection from '../../components/featured-collection';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Main />
      <FeaturedCollection />
    </Layout>
  );
};

export default HomePage;
