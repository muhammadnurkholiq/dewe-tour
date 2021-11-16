import {Image} from 'react-bootstrap';
import "../../assets/css/modal_aprove.css"

function ModalAprove() {
    return (
        <div className="payment1">
            
            <div className="container">

                <div className="card-payment">
                    <div className="row">
                        
                        <div className="col-sm-5">
                            <Image src="/images/brand.png"/>
                            <div className="info1">
                                <h3>6D/4N Fun Tassie Vacation</h3>
                                <p>Australia</p>
                                <div className="status-payment">
                                    <h6>Waiting Payment</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div class="info2">
                                <div class="info2-1">
                                    <div class="date">
                                        <h1>Date Trip</h1>
                                        <p>26 August 2020</p>
                                    </div>
                                    
                                    <div class="Accomodation">
                                        <h1>Accomodation</h1>
                                        <p>Hotel 4 Nights</p>
                                    </div>
                                </div>
                                <div class="info2-2">
                                    <div class="duration">
                                        <h1>Duration</h1>
                                        <p>6 Day 4 Night</p>
                                    </div>
                                    
                                    <div class="transporartion">
                                        <h1>Transporartion</h1>
                                        <p>Qatar Airways</p>
                                    </div>  
                                </div>              
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div class="info3">
                            <h1>Booking</h1>
                            <p><span>Saturday</span>, 22 july 2020</p>
                            <Image src="/images/struk.jpg" alt="" className="img-pay" />
                            <p>upload payment proof</p>
                            </div>
                        </div>

                    </div>

                    <div class="payment-list">
                        <table class="table">
                            <thead>
                                <th scope="col">No</th>
                                <th scope="col" width="300px">Full Name</th>
                                <th scope="col" width="200px" >Gender</th>
                                <th scope="col" width="200px">Phone</th>
                            </thead>
                            <tbody>
                                <tr className="t-content">
                                    <td>1</td>
                                    <td>Muhammad Nurkholiq</td>
                                    <td>Male</td>
                                    <td>081234567890</td>
                                    <th scope="row">Qty</th>
                                    <th scope="row">:</th>
                                    <th scope="row">1</th>
                                </tr>
                                <tr className="table-bot">
                                    <th scope="row" colspan="5" className="total">Total</th>
                                    <th scope="row">:</th>
                                    <th scope="row" class="total-payment" width="150px"><span>IDR. </span>12,398,000</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ModalAprove;
