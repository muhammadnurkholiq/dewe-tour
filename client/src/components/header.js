import React, { useState} from 'react';
import { Navbar, Nav, Button, Modal, Form, Dropdown, Image } from 'react-bootstrap';
import "../assets/css/header.css"

function Header() {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const handleCloseLogin = () => setLogin(false);
    const handleShowLogin = () => setLogin(true);

    const handleCloseRegister = () => setRegister(false);
    const handleShowRegister = () => setRegister(true);

    function UserPage() {
        return(
            <Navbar expand="lg">
                <div className="container">
                    <Navbar.Brand href="/"><img
                        src="http://localhost:3000/images/brand-home.png"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto buttons">
                            <Dropdown className="drop">
                                <Dropdown.Toggle className="drop-toggle">
                                    <Image src="http://localhost:3000/images/user1.jpg" className="drop-img" />
                                </Dropdown.Toggle>
                    
                                <Dropdown.Menu className="drop-menu">
                                    <Dropdown.Item href="/profile" className="drop-item"><Image src="http://localhost:3000/images/icon-user.png" className="icon" />Profile</Dropdown.Item>
                                    <Dropdown.Item href="/payment" className="drop-item"><Image src="http://localhost:3000/images/icon-pay.png" className="icon" />Pay</Dropdown.Item>
                                    <Dropdown.Divider className="divider" />
                                    <Dropdown.Item href="/" className="drop-item"><Image src="http://localhost:3000/images/icon-logout.png" className="icon" />Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>  
        )
    }
    
    function GuestPage() {
        return(
            <Navbar expand="lg">
                <div className="container">
                    <Navbar.Brand href="/"><img
                        src="http://localhost:3000/images/brand-home.png"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto buttons">
                            <Button variant="outline-light text-white mr-3" className="login" onClick={handleShowLogin}>Login</Button>
                            <Button variant="warning text-white" onClick={handleShowRegister}>Register</Button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>        
        )
    }
    
    const [isLogIn, setIsLogIn] = useState(true);
    
    const renderPage = () => {
        if(isLogIn) {
            return <UserPage />
        } else {
            return <GuestPage />
        }
    }

    return (
    <>
        {/* navbar */}
            {renderPage()}
        {/* ending navbar */}

        {/* modal login */}
        <Modal show={login} onHide={handleCloseLogin} className="modalHeader">
            <div className="container">
                
                <Modal.Title className="title">Login</Modal.Title>
                <Form>
                    <div className="form-group">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="label">Email</Form.Label>
                            <Form.Control type="email" className="input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="label">Password</Form.Label>
                            <Form.Control type="password" className="input" />
                        </Form.Group>
                    </div>

                    <Button variant="warning text-white" type="submit" className="button center">
                        <h3 variant="text-center">Login</h3>
                    </Button>
                    <p class="text-center">Don't have an account? click <span onClick={()=>{handleCloseLogin();handleShowRegister()}}>Here</span></p>
                </Form>

            </div>
        </Modal>

        {/* modal register */}
        <Modal show={register} onHide={handleCloseRegister} className="modalHeader">
            <div className="container">
                
                <Modal.Title className="title">Register</Modal.Title>
                <Form>
                    <div className="form-group">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="label">Full Name</Form.Label>
                            <Form.Control type="text" className="input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="label">Email</Form.Label>
                            <Form.Control type="email" className="input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="label">Password</Form.Label>
                            <Form.Control type="password" className="input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="label">Phone</Form.Label>
                            <Form.Control type="number" className="input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" className="textarea" />
                        </Form.Group>
                    </div>

                    <Button variant="warning text-white" type="submit" className="button center">
                        <h3 variant="text-center">Register</h3>
                    </Button>
                    <p class="text-center">Already have an account? click <span onClick={()=>{handleCloseRegister();handleShowLogin();}} >Here</span></p>
                </Form>

            </div>
        </Modal>

    </>
    )
}



export default Header;