import { Card } from 'react-bootstrap';

function Info_card() {
    return (
        <div>

            {/* info card */}
            <div className="info-card">
                <div className="container">

                    {/* card price */}
                    <Card >
                        <Card.Img variant="top" src="http://localhost:3000/images/price.png" />
                        <Card.Body>
                            <Card.Title className="title">Best Price Guarantee</Card.Title>
                            <Card.Text className="desc">
                                A small river named Duren flows by their place and supplies
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card travellers */}
                    <Card >
                        <Card.Img variant="top" src="http://localhost:3000/images/love-us.png" />
                        <Card.Body>
                            <Card.Title className="title">Travellers Love Us</Card.Title>
                            <Card.Text className="desc">
                                A small river named Duren flows by their place and supplies
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card agent */}
                    <Card >
                        <Card.Img variant="top" src="http://localhost:3000/images/agent.png" />
                        <Card.Body>
                            <Card.Title className="title">Best Travel Agent</Card.Title>
                            <Card.Text className="desc">
                                A small river named Duren flows by their place and supplies
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* card support */}
                    <Card >
                        <Card.Img variant="top" src="http://localhost:3000/images/support.png" />
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

        </div>
    )
}

export default Info_card;
