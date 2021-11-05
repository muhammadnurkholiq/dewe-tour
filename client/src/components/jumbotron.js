import { Form, FormControl, Button} from 'react-bootstrap';

function Jumbotron() {
    return (

        // Jumbotron
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 className="title"><span>Explore</span></h1>
            <h2>your amazing city together</h2>
    
            <label for="ysearch">Find great places to holiday</label>
            <Form className="d-flex search">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="warning text-white">Search</Button>
            </Form>
        </div>
        <div class="img-cover"></div>
        </div>
        // ending Jumbotron
    )

}

export default Jumbotron;