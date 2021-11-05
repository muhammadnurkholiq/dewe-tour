import { Form, Button } from "react-bootstrap";
import "../../assets/css/addTrip.css";
import Header2 from "../../components/header2";

function Add_qty() {
  return (
    <div className="addTrip">
      {/* header  */}
      <Header2 />
      {/* ending header  */}

      <div className="container">
        <h1>Add Trip</h1>

        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="label">Data Trip</Form.Label>
            <Form.Control as="select" className="input">
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Price</Form.Label>
            <Form.Control type="text" className="input" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Quantity</Form.Label>
            <Form.Control type="text" className="input" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Sub Total</Form.Label>
            <Form.Control type="text" className="input" />
          </Form.Group>

          <div class="btn-trip">
            <Button
              type="submit"
              className="btn-outline-warning bg-warning text-white btn-trips"
            >
              Add Quantity
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Add_qty;
