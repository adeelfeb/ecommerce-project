import { useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

function Home() {
  const { state, dispatch } = useProductContext();
  const { products, loading, error } = state;

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        console.log("fetched the details:", data)
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: axios.isAxiosError(error)
            ? error.message
            : 'An unexpected error occurred',
        });
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <h6>Price: ${product.price}</h6>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
