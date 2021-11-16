import React, { useState} from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import "../assets/css/header.css"

import { API } from "../config/api";

export default function modalRegister({ show, handleClose, handleSwitch })  {
    const [inputRegister, setInputRegister] = useState({
        fullname: "",
        email: "",
        password: "",
        gender: "male",
        phone: "",
        address: "",
    });
    
    const handleRegisterChange = (e) => {
        setInputRegister((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
    };
    
    const handleRegister = async (e) => {
        try {
          e.preventDefault();
    
          // Create Configuration Content-type here ...
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
    
          // Convert form data to string here ...
          const body = JSON.stringify(inputRegister);
    
          // Insert data user to database here ...
          const response = await API.post("/register", body, config).catch(
            (error) => {
              if (error?.response.data.error?.message) {
                return NotificationManager.error(
                  error.response.data.error.message,
                  error.response.data.status
                );
              }
    
              if (error?.response.data?.message) {
                return NotificationManager.error(
                  error.response.data.message,
                  error.response.data.status
                );
              }
            }
          );
    
          if (response?.data.status === "success") {
            setInputRegister({
              fullname: "",
              email: "",
              password: "",
              gender: "male",
              phone: "",
              address: "",
            });
            handleClose();
            return NotificationManager.success(response.data.message, "Success");
          }
        } catch (error) {
          if (error) throw error;
        }
    };

    return (
    <>
        {/* modal register */}
        <Modal show={show} onHide={handleClose} className="modalHeader">
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
                            <Form.Control type="number  " className="input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="label">Address</Form.Label>
                            <Form.Control as="textarea" className="textarea" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image">
                            <h1 className="label">Image</h1>
                            <div className="uploadProfile">
                                <Form.Label className="uploadBtn">Attache Here <Image src="http://localhost:3000/images/icon-upload.png" className="iconProfile" /></Form.Label>
                                <Form.Control type="file" hidden />
                            </div>
                        </Form.Group>
                    </div>

                    <Button variant="warning text-white" type="submit" className="button center">
                        <h3 variant="text-center">Register</h3>
                    </Button>
                    <p class="text-center">Already have an account? click <span onClick={handleSwitch} >Here</span></p>
                </Form>

            </div>
        </Modal>
    </>
    )
}