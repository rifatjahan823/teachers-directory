import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '.././../../assets/home/Logo.png';
import user from ".././../../assets/search-teacher/teachers-1.png";
import "./Header.css";

const Header=()=>{
  const [login,setLogin]=useState(false);
  const handleLogin=()=>{
    setLogin(true)
  }
  return (
    <Navbar id="top-bottom" style={{background:'white'}} expand="lg">
      <Container fluid>
        <Navbar.Brand>
        <Link to="/">
        <img className='img-fluid' src={logo} alt="logo" />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             
          </Nav>           
           <Link className='header_link' to='/search_teacher'>Search teachers</Link>
           <Link className='header_link' to='/job_search'>Job search</Link>
           <Link className='header_link' to='/job_post'>How it works</Link>
           <Link className='header_link' to='/school_dashboard'>About us</Link>
           <Link className='header_link' to='/teacher_dashboard'>Contact us</Link>
           <Link className='header_link' to='/signup'>
           <button  className="login_btn">Login</button>
            </Link>
          
           {
            login?<>
            <span className='line'></span>
            <img className='user_img' src={user} alt="user" />
            <p className='pt-3 px-2 text-info fw-bold'>Hi Jane <select style={{border:'none'}}>
              <option value="1"></option>               
            </select></p>            
            </>:
        
            <button onClick={handleLogin} className="register_btn">Register</button>
           
           } 
           
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;