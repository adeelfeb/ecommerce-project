import React, { createContext, useContext, useReducer } from 'react';
import { productReducer, initialState, ProductState, ProductAction } from '../reducers/productReducer';
import { PropsWithChildren } from 'react';


type ProductContextType = {
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};