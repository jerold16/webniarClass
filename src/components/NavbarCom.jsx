import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import logo from '../assets/Logo/msbuilders.png'

const NavbarCom = () => {
    let expand = 'lg'
    return (
        <div className=' sticky top-0 z-100 bg-white mb-2 border-b-[1.4px] border-slate-800/10 ' >
            <Navbar key={expand} expand={expand} className=" ">
                <Container fluid>
                    <Navbar.Brand className=' fw-medium ' href="#">
                        <img src={logo} alt="Company Logo"
                            className=' w-[7rem]! ' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img src={logo} alt="Company Logo"
                                    className=' w-[7rem]! ' />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className=' fw-medium ' href="#action1">Home</Nav.Link>
                                <Nav.Link className=' fw-medium ' href="#action2">About</Nav.Link>
                                <Nav.Link className=' fw-medium ' href="#action2">Service</Nav.Link>
                                <Nav.Link className=' fw-medium ' href="#action2">Works</Nav.Link>
                                <Nav.Link className=' fw-medium ' href="#action2">Contact us</Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarCom
