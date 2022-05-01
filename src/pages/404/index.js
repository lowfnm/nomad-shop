import style from './404.module.scss';
import Layout from '../../components/common/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className={style.title}>NOT FOUND</h1>
    </Layout>
  );
};

export default NotFoundPage;
