import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import "../../assets/css/addTrip.css";
import Footer from "../../components/footer";

function Add_trip() {


  return (
    <div className="addTrip">

      <div expand="lg" className="navbar">
        <div className="img-cover"></div>
      </div>

      <div className="container">
        <h1>Add Trip</h1>

        {/* form */}
        <Form className="forms">
          <Form.Group controlId="titletTrip">
            <Form.Label className="txtLabel">Title Trip</Form.Label>
            <Form.Control type="text" className="txtInput" placeholder="Add Title Trip" />
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label className="txtLabel">Country</Form.Label>
            <Form.Control as="select" className="txtInput select">
              <option value="" disabled selected hidden>Add Country</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="accommodation">
            <Form.Label className="txtLabel">Accommodation</Form.Label>
            <Form.Control type="text" className="txtInput" placeholder="Add Accommodation" />
          </Form.Group>
          
          <Form.Group controlId="transportation">
            <Form.Label className="txtLabel">Transportation</Form.Label>
            <Form.Control type="text" className="txtInput" placeholder="Add Transportation" />
          </Form.Group>

          <Form.Group controlId="eat">
            <Form.Label className="txtLabel">Eat</Form.Label>
            <Form.Control type="text" className="txtInput" placeholder="Add Eat" />
          </Form.Group>

          <h1>Duration</h1>
          
          <div className="duration">

            <Form.Group controlId="addDay" className="day">
              <Form.Control type="text" className="txtInput" placeholder="Add Day" />
              <Form.Label className="txtLabel">Day</Form.Label>
            </Form.Group>
          
            <Form.Group controlId="addNight" className="night">
              <Form.Control type="text" className="txtInput" placeholder="Add Night" />
              <Form.Label className="txtLabel">Night</Form.Label>
            </Form.Group>

          </div>

          <Form.Group controlId="dateTrip">
            <Form.Label className="txtLabel">Date Trip</Form.Label>
            <Form.Control type="text" className="txtInput" placeholder="Add Date Trip" />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label className="txtLabel">Price</Form.Label>
            <Form.Control type="text" className="txtInput" placeholder="Add Price" />
          </Form.Group>

          <Form.Group controlId="quota">
            <Form.Label className="txtLabel">Quota</Form.Label>
            <Form.Control type="text" className="txtInput" placeholder="Add Quota" />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label className="txtLabel">Description</Form.Label>
            <Form.Control as="textarea" className="txtArea" placeholder="Add Description" />
          </Form.Group>

          <Form.Group controlId="image">
            <h1 className="txtLabel">Image</h1>
            <div className="uploadImg">
              <Form.Label className="uploadBtn">Attache Here <Image src="http://localhost:3000/images/icon-upload.png" className="icon" /></Form.Label>
              <Form.Control type="file" multiple hidden />
              
            </div>
          </Form.Group>

          <Button type="submit" className="btnForms">
            Add Trip
          </Button>

        </Form>
        {/* ending form */}
      
      </div>
      {/* footer  */}
        <Footer />
      {/* ending footer  */}
    </div>
  );
}

export default Add_trip;
