import { useProductContext } from '../context/ProductContext';
import { useEffect } from 'react';

 const  ProductList = () => {
  const { state, dispatch } = useProductContext();

  useEffect(() => {
    const fetchProducts = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
          const response = await fetch('/api/products');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err: unknown) {
          const message = err instanceof Error 
            ? err.message 
            : typeof err === 'string' 
              ? err 
              : 'Unknown error occurred';
          dispatch({ type: 'FETCH_FAIL', payload: message });
        }
      };

    fetchProducts();
  }, [dispatch]);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  return (
    <div>
      {state.products.map(product => (
        <div key={product.slug}>{product.name}</div>
      ))}
    </div>
  );
};


export default ProductList;