import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../assets/css/addTrip.css";
import Header2 from "../../components/header2";

function Add_trip() {
  return (
    <div className="addTrip">
      {/* header  */}
      <Header2 />
      {/* ending header  */}

      <div className="container">
        <h1>Add Trip</h1>

        {/* form */}
        <Form className="forms">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="txtLabel">Title Trip</Form.Label>
            <Form.Control type="text" className="txtInput" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="txtLabel">Country</Form.Label>
            <Form.Control as="select" className="txtInput">
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="txtLabel">Accommodation</Form.Label>
            <Form.Control type="text" className="txtInput" />
          </Form.Group>
          
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="txtLabel">Transportation</Form.Label>
            <Form.Control type="text" className="txtInput" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="txtLabel">Eat</Form.Label>
            <Form.Control type="text" className="txtInput" />
          </Form.Group>

          <h1>Duration</h1>
          
          <div className="duration">

            <Form.Group controlId="exampleForm.ControlInput1" className="day">
              <Form.Control type="text" className="txtInput" />
              <Form.Label className="txtLabel">Day</Form.Label>
            </Form.Group>
          
            <Form.Group controlId="exampleForm.ControlInput1" className="night">
              <Form.Control type="text" className="txtInput" />
              <Form.Label className="txtLabel">Night</Form.Label>
            </Form.Group>

          </div>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="txtLabel">Date Trip</Form.Label>
            <Form.Control type="text" className="txtInput" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="txtLabel">Price</Form.Label>
            <Form.Control type="text" className="txtInput" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="txtLabel">Quota</Form.Label>
            <Form.Control type="text" className="txtInput" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="txtLabel">Example textarea</Form.Label>
            <Form.Control as="textarea" className="txtArea" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="txtLabel">Image</Form.Label>
          </Form.Group>

          <Button type="submit" className="btnForms">
            Add Trip
          </Button>

        </Form>
        {/* ending form */}
      
      </div>
    </div>
  );
}

export default Add_trip;
