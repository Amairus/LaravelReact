import React, { Component }  from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function Header()
{
    const navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem('user-info'));

    function logOut(){
        localStorage.clear();
        navigate("/register");
    }

    return(
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">E-Com</Navbar.Brand>
            <Nav className="mr-auto navbar_warapper">
                {
                    localStorage.getItem('user-info') ? 
                    <>
                    <Link to="/">Product List</Link>
                    <Link to="/add" >Add Product </Link>
                    <Link to="/update" >Update Product </Link>
                    </>
                    :
                    <>
                    <Link to="/login" >Login </Link>
                    <Link to="/register" >Register </Link>   
                    </>
                }
            </Nav>
            {localStorage.getItem('user-info') ? 
            <Nav>
                <NavDropdown title={user && user.name} >
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            :null
            }
            </Container>
        </Navbar>
        </div>
    )
}

export default Header