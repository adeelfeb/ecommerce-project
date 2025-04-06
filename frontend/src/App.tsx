import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


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
          <Nav className='p-1'>
            <Link to='/cart' className='nav-link'>Cart</Link>
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/register' className='nav-link'>Register</Link>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-4 text-center '>
        <p>Temp Products</p>
        <Outlet/>
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
