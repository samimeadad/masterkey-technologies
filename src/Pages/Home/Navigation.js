import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    return (
        <div>
            <div className="d-flex justify-content-between container mt-3">
                <div>
                    <h4>ShopCart Logo Here</h4>
                </div>
                <div>
                    <p>Login</p>
                </div>
            </div>
            <hr className="container" />
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <div className="ms-4">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Fresh</Nav.Link>
                            <Nav.Link href="#pricing">Today's Deals</Nav.Link>
                            <Nav.Link href="#pricing">Mobiles</Nav.Link>
                            <Nav.Link href="#pricing">Gift Cards</Nav.Link>
                            <Nav.Link href="#pricing">Woman Clothing</Nav.Link>
                            <Nav.Link href="#pricing">Men Clothing</Nav.Link>
                            <Nav.Link href="#pricing">Kids Clothing</Nav.Link>
                            <Nav.Link href="#pricing">Pet Corner</Nav.Link>
                            <Nav.Link href="#pricing">Books</Nav.Link>
                            <Nav.Link href="#pricing">Kitchen</Nav.Link>
                            <Nav.Link href="#pricing">Bed Room</Nav.Link>
                            <Nav.Link href="#pricing">Sports</Nav.Link>
                            <Nav.Link href="#pricing">Bags</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={ 2 } href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;