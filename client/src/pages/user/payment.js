import React, {useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/payment.css";

// Component 
import PaymentCard from '../../components/user/payment_card';
import Footer from "../../components/footer";

export default function Payment() {
    const title = "Payment"
    document.title = 'Dewe Tour | ' + title

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="payment">
            
            <div expand="lg" className="navbar">
                <div className="img-cover"></div>
            </div> 

            {/* PaymentCard */}
            <PaymentCard />
            {/* ending PaymentCard */}
            
            <div class="payment-pay">
                <div class="container">
                    <Button className="btn btn-outline-warning bg-warning text-white text-center" onClick={handleShow}>Pay</Button>
                </div>

                <Modal show={show} onHide={handleClose} className="modal1">
                    
                    <Modal.Title className="modal-title">
                        <h1>Your payment will be confirmed within 1 x 24 hours</h1>
                        <h1>To see orders click <a href="/Profile">Here</a> thank you</h1>
                    </Modal.Title>

                </Modal>
            </div>
            
            {/* footer  */}
            <Footer />
            {/* ending footer  */}  
        </div>
    )
}