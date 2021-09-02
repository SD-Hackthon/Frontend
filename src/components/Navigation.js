import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Navigation.css'

function Navigation() {
    return (
        <div >
            <Navbar className="navigation" expand="lg">
                <Container>
                    <Navbar.Brand >
                        <Link to="/" className="nav-brand">FrontEnd</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/invoice" className="nav-link">Invoices</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/createcompany" className="nav-link">Create Company</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <NavDropdown title="Select Company" id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        Company 1
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>Company 2</NavDropdown.Item>
                                    <NavDropdown.Item>Company 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link>
                            <Link to="/login" className="nav-link">Login</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/signup" className="nav-link">Signup</Link>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
