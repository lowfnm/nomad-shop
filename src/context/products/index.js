import { createContext, useState } from 'react';
import SHOP_DATA from '../../data/shop';

export const ProductsContext = createContext();

const ProductsContextProvider = props => {
  const { children } = props;
  const [products] = useState(SHOP_DATA);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
