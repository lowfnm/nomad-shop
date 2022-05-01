import { useContext } from 'react';

import Layout from '../../components/common/layout';
import { ProductsContext } from '../../context/products';
import FeaturedProduct from '../../components/common/featured-product';

const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => <FeaturedProduct {...product} key={product.id} />);

  return (
    <Layout>
      <h2>Shop</h2>
      <div>{allProducts}</div>
    </Layout>
  );
};

export default ShopPage;
