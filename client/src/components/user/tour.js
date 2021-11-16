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
                    <h1 className="text-center">Group Tour</h1>

                    <div className="cards">

                        {tour.map(item => ( 
                            <Link to={{pathname:`/DetailTourUser/${item.id}`}}  style={{textDecoration:"none"}} >    
                                <Card className="card">
                                    <Card.Header>
                                        <div className="img-tour">
                                            <div className="quota">
                                                <p><span>12</span> / <span>15</span></p>
                                            </div>
                                            <Card.Img className="card-img" variant="top" src={item.image} />
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title className="title">{item.title}</Card.Title>
                                        <Card.Text className="desc">
                                            <p className="price">IDR. <span><NumberFormat value={item.price} thousandsGroupStyle="thousand" type="text" displayType="text" decimalSeparator="." thousandSeparator={true} allowNegative={true} /></span></p>
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
