import { Card } from "react-bootstrap";
import tour from "../../list-tour.json";
import { Link } from 'react-router-dom';
import NumberFormat from "react-number-format";

function Tour() {
    return (
        <div>

           {/* tour */}
           <div className="tour">
                <div className="container">

                    <div className="header">
                        <h1>Income Trip</h1>

                        <a href="/AddTripAdmin" className="btn btn-outline-warning bg-warning text-white text-center">Add Trip</a>
                    </div>

                    <div className="cards">

                        {tour.map(item => (  
                                <Card className="card">
                                    <Card.Header>
                                        <div className="img-tour">
                                            <div className="action"> 
                                                <a href="/AddTripAdmin" className="btn text-white text-center btn-edit">Edit</a>
                                                <a href="/" className="btn text-white text-center btn-delete">Delete</a>
                                            </div>
                                            <div className="quota">
                                                <p><span>12</span> / <span>15</span></p>
                                            </div>
                                            <Card.Img className="card-img" variant="top" src={item.image} />
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title className="title">{item.title}</Card.Title>
                                        <Card.Text className="desc">
                                            <p className="price">IDR. <span><NumberFormat value={item.price} thousandsGroupStyle="thousand" type="text" displayType="text" decimalSeparator="." thousandSeparator={true} allowNegative={false} /></span></p>
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

export default Tour;
