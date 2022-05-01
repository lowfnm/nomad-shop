import Header from '../header';
import Footer from '../footer';

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
