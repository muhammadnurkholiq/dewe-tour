import { Card } from "react-bootstrap";
import tour from "../../list-tour.json";
import { Link } from 'react-router-dom';

function Tour() {
    return (
        <div>

           {/* tour */}
           <div className="tour">
                <div className="container">
                    <h1 className="text-center">Group Tour</h1>

                    <div className="cards">

                        {tour.map(item => ( 
                            <Link to={{pathname:`/DetailTourUser/${item.id}`}}  style={{textDecoration:"none"}} >    
                                <Card className="card">
                                    <div className="img-tour">
                                        <Card.Img className="card-img" variant="top" src={item.image} />
                                    </div>
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
