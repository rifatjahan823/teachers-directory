import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '.././../../assets/home/Logo.png';
import "./Header.css";

const Header=()=>{
  return (
    <Navbar style={{background:'white'}} expand="lg">
      <Container fluid>
        <Navbar.Brand><img className='img-fluid' src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             
          </Nav>           
           <Link className='header_link' to='/search_teacher'>Search teachers</Link>
           <Link className='header_link' to='/'>Job search</Link>
           <Link className='header_link' to='/'>How it works</Link>
           <Link className='header_link' to='/'>About us</Link>
           <Link className='header_link' to='/'>Contact us</Link>
           <Link className='header_link' to='/'>
           <Button variant="outline-info px-4">Login</Button>
           </Link>
           <Link className='header_link' to='/'>
           <Button>Register</Button>
           </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;



{/*  */}