import React from 'react'
import { Image, Button } from 'react-bootstrap';
import "../../assets/css/detail_tour.css";
import tour from "../../list-tour.json";
import { useState } from 'react';
import NumberFormat from "react-number-format";

export default function DetailTour(props) {
    const title = "Detail Tour"
    document.title = 'Dewe Tour | ' + title

    const tourDetail = tour.find(({id})=>id===props.match.params.id_tour);

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    };

    const decrement = () => {
        setCount(count <= 1 ? count : count - 1);
    };

    const price = tourDetail.price * count;

    return (
        <div className="detail_tour">

            <div expand="lg" className="navbar">
                <div className="img-cover"></div>
            </div> 
            
            <div className="container">

                <h1 className="detail-title">{tourDetail.title}</h1>
                <p>{tourDetail.location}</p>
            
                <div className="img-group">
                    <div className="row">
                        <div className="col-sm-12 img_content" > 
                            <Image src={tourDetail.image} className="img1" />
                        </div>
                    </div>

                    <div className="img-child">
                            <Image className="img" src="http://localhost:3000/images/img-content2.png" />
                            <Image className="img" src="http://localhost:3000/images/img-content3.png" />
                            <Image className="img" src="http://localhost:3000/images/img-content4.png" />
                    </div>
                </div>

                <div className="information">
                    <h5>Information Trip</h5>
                    
                    <div className="infor">  
                        <div className="accomodation">
                            <p>Accomodation</p>
                            <div className="infor-group">
                                <Image src="http://localhost:3000/images/hotel.png" className="infor-icon"/>
                                <h4>Hotel 4 Nights</h4>
                            </div>
                        </div>

                        <div className="transportion">
                            <p>Transportion</p>
                            <div className="infor-group">
                                <Image src="http://localhost:3000/images/plane.png" className="infor-icon"/>
                                <h4>Qatar Airways</h4>
                            </div>
                        </div>

                        <div className="eat">
                            <p>Eat</p>
                            <div className="infor-group">
                                <Image src="http://localhost:3000/images/food.png" className="infor-icon"/>
                                <h4>Included as ltinerary</h4>
                            </div>
                        </div>

                        <div className="duration">
                            <p>Duration</p>
                            <div className="infor-group">
                                <Image src="http://localhost:3000/images/time.png" className="infor-icon"/>
                                <h4>6 Day 4 Night</h4>
                            </div>
                        </div>

                        <div className="date_trip">
                            <p>Date Trip</p>
                            <div className="infor-group">
                                <Image src="http://localhost:3000/images/date.png" className="infor-icon"/>
                                <h4>26 August 2020</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="desc">
                    <h2>Description</h2>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <div class="payment-list">
                        <div className="prices">
                            <div className="prices1">
                                <h4 className="price">IDR. <NumberFormat value={tourDetail.price} thousandsGroupStyle="thousand" type="text" displayType="text" decimalSeparator="." thousandSeparator={true} allowNegative={true} /></h4>
                                {/* <h4 className="price">IDR. <span>{tourDetail.price}</span></h4> */}
                                <h4>/ Person</h4>
                            </div>
                            <div className="prices2">
                                <Button onClick={decrement}><h1>-</h1></Button>
                                <h1>{count}</h1>
                                <Button onClick={increment}><h1>+</h1></Button>
                            </div>
                        </div>

                        <div className="total_prices">
                            <h4>Total :</h4>
                            <h4 className="price">IDR. <span><NumberFormat value={price} thousandsGroupStyle="thousand" type="text" displayType="text" decimalSeparator="." thousandSeparator={true} allowNegative={true} /></span></h4>
                        </div>
                    </div>

                </div>

                <div class="payment-pay">
                    <div class="container">
                        <a href="/Payment" className="btn btn-outline-warning bg-warning text-white text-center">Book Now</a>
                    </div>
                </div>

            </div>
        </div>
    )
}