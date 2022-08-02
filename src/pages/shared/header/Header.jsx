import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '.././../../assets/home/Logo.png';
import "./Header.css";

const Header=()=>{
  return (
    <Navbar id="top-bottom" style={{background:'white'}} expand="lg">
      <Container fluid>
        <Navbar.Brand><img className='img-fluid' src={logo} alt="logo" /> </Navbar.Brand>
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
           <Link className='header_link' to='/job_details'>How it works</Link>
           <Link className='header_link' to='/'>About us</Link>
           <Link className='header_link' to='/'>Contact us</Link>
           <Link className='header_link' to='/'>
           <button className="login_btn">Login</button>
           </Link>
           <Link className='header_link' to='/'>
           <button className="register_btn">Register</button>
           </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;