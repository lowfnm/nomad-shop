import { useContext } from 'react';
import classNames from 'classnames';

import { ProductsContext } from '../../context/products';
import FeatureProduct from '../common/featured-product';
import style from './featured-collection.module.scss';

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map(product => <FeatureProduct {...product} key={product.id} />);

  return (
    <div className={classNames(style.featuredCollection, 'container')}>
      <h2>Featured Collection</h2>
      <div className={style.products}>{productItems}</div>
    </div>
  );
};

export default FeaturedCollection;
