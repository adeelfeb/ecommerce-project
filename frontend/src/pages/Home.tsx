import { Col, Row } from 'react-bootstrap';
import { sampleProducts } from '../data';
import { Link } from 'react-router-dom';  // ✅ Fix: Import from 'react-router-dom' (not 'react-router')

function Home() {
  return (
    <div>
      <Row>
        {sampleProducts.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={`/product/${product.slug}`}>  {/* Fixed: Use `/` instead of `:` */}
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