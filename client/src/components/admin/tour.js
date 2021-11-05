import { Card } from "react-bootstrap";
import tour from "../../list-tour.json";
import { Link } from 'react-router-dom';

function Tour() {
    return (
        <div>

           {/* tour */}
           <div className="tour">
                <div className="container">

                    <div className="header">
                        <h1>Income Trip</h1>

                        <a href="/AddTrip" className="btn btn-outline-warning bg-warning text-white text-center">Add Trip</a>
                    </div>

                    <div className="cards">

                        {tour.map(item => ( 
                            <Link to={{pathname:`/detail-tour/${item.id}`}} >    
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
                            </Link>

                        ))};
                        
                    </div>

                </div>
            </div>
            {/* ending tour */} 

        </div>
    )
}

export default Tour;
