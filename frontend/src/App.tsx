import { useEffect } from 'react';
import { sampleProducts } from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

function App() {
  useEffect(() => {
    document.title = "Amazon Clone";
  }, []);

  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>T-Commerce</Navbar.Brand>
          </Container>
          <Nav>
            <a href='/cart' className='nav-link'> Cart</a>
            <a href='/signin' className='nav-link'>Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-4 text-center '>
        <p>Temp Products</p>
        <Row>
          {sampleProducts.map(product => (
            <Col key={product.slug} sm={6} md={4} lg={3} >
              <img src={product.image} alt="product-image" className="product-image" />
              <h4>{product.name}</h4>
              <h6>Price: ${product.price} </h6>
              
            </Col>
          ))}
        </Row>
        </Container>
        
      </main>
      <footer>
        <div className='text-center '>
        Copy Right reserved
        </div>
      </footer>
    </div>
  );
}


export default App
