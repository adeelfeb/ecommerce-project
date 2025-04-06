// frontend/src/reducers/productReducer.ts
import { Product } from '../types/Product'; // Assuming you have a Product type defined

// Define your types
export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string;
};

export type ProductAction =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_FAIL'; payload: string };

// Initial state
export const initialState: ProductState = {
  products: [],
  loading: true,
  error: '',
};

// Reducer function
export const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};