import React from 'react';
import "../assets/css/home.css";
import { Form, FormControl, Button, Card } from 'react-bootstrap';
import tour from "../list-tour.json";

function Home() {
    return (
        <div className="home">

            {/* jumbotron */}
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1><span>Explore</span></h1>
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
            {/* ending jumbotron */}
            
            {/* info card */}
            <div className="info-card">
                <div className="container">

                    {/* card price */}
                    <Card >
                        <Card.Img variant="top" src="/images/price.png" />
                        <Card.Body>
                            <Card.Title className="title">Best Price Guarantee</Card.Title>
                            <Card.Text className="desc">
                                A small river named Duren flows by their place and supplies
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card travellers */}
                    <Card >
                        <Card.Img variant="top" src="/images/love-us.png" />
                        <Card.Body>
                            <Card.Title className="title">Travellers Love Us</Card.Title>
                            <Card.Text className="desc">
                                A small river named Duren flows by their place and supplies
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card agent */}
                    <Card >
                        <Card.Img variant="top" src="/images/agent.png" />
                        <Card.Body>
                            <Card.Title className="title">Best Travel Agent</Card.Title>
                            <Card.Text className="desc">
                                A small river named Duren flows by their place and supplies
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card support */}
                    <Card >
                        <Card.Img variant="top" src="/images/support.png" />
                        <Card.Body>
                            <Card.Title className="title">Our Dedicated Support</Card.Title>
                            <Card.Text className="desc">
                                A small river named Duren flows by their place and supplies
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            {/* ending info card */}

            {/* tour */}
            <div className="tour">
                <div className="container">
                    <h1 className="text-center">Group Tour</h1>

                    <div className="cards">

                        {tour.map(item => ( 
                       
                        <Card className="card">
                            <Card.Img className="card-img" variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className="title">{item.title}</Card.Title>
                                <Card.Text className="desc">
                                    <p className="price">IDR. <span>{item.price}</span></p>
                                    <p class="location">{item.location}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        ))};
                        
                    </div>

                </div>
            </div>
            {/* ending tour */}

        </div>
    )
}

export default Home;
