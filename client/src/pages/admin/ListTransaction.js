import React, { useState} from 'react';
import {Table, Image, Modal, Button, ButtonGroup} from "react-bootstrap";
import "../../assets/css/list_transaction.css";
import Header2 from "../../components/header2";
import Action from "../../assets/images/action.png"
import ModalAprove from "../../components/user/payment_card";

function ListTransaction() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="transaction">
            {/* header  */}
            <Header2 /> 
            {/* ending header  */}

            <div className="container">

                <h1>Incoming Transaction</h1>

                <div className="tables">
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr >
                                <th>No</th>
                                <th>Users</th>
                                <th>Trip</th>
                                <th>Bukti Transfer</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Radif Ganteng</td>
                                <td>6D/4N Fun Tassie Vaca ...</td>
                                <td>bca.jpg</td>
                                <td>pending</td>
                                <td><Image src={Action} className="icon" onClick={handleShow} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Modal show={show} onHide={handleClose} className="modalAprove">
                    <Modal.Body>
                        <ModalAprove />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="btnCancel" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btnApprove" onClick={handleClose}>
                        Approve
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}


export default ListTransaction;