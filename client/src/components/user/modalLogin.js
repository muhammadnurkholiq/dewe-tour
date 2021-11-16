import React, { useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "../assets/css/header.css"

import { API, setAuthToken } from "../../config/api";

import { AuthContext } from "contexts/AuthContext";

export default function modalLogin({ show, handleClose, handleSwitch }) {
    const { dispatch } = useContext(AuthContext);

    const [inputLogin, setInputLogin] = useState({
        email: "",
        password: "",
    });

    const handleLoginChange = (e) => {
        setInputLogin((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
        }));
    };

    const handleLogin = async (e) => {
        try {
        e.preventDefault();

        const config = {
            headers: {
            "Content-Type": "application/json",
            },
        };

        // Convert form data login to string here ...
        const body = JSON.stringify(inputLogin);

        // validate data user from database here ...
        const response = await API.post("/login", body, config).catch((error) => {
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
        });

        setAuthToken(response?.data.data.token);

        if (response?.status === 200) {
            dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data.data,
            });
            NotificationManager.success(response.data.message, "Success");
            handleClose();

            setTimeout(() => {
            window.location.reload();
            }, 1500);
        }
        } catch (error) {
        if (error) throw error;
        }
    };

    return (
    <>
        {/* modal login */}
        <Modal show={show} onHide={handleClose} className="modalHeader">
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
                    <p class="text-center">Don't have an account? click <span onClick={handleSwitch}>Here</span></p>
                </Form>

            </div>
        </Modal>
    </>
    )
}