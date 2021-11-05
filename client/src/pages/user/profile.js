import React from 'react';
import "../../assets/css/profile.css";
import { Image } from 'react-bootstrap';
import PaymentCard from "../../components/user/profile_card"

export default function Profile() {
    const title = "Profile"
    document.title = 'Dewe Tour | ' + title

    let url= "";
    return (
        <div className="profile">
            <div expand="lg" className="navbar">
                <div className="img-cover"></div>
            </div> 
            
            <div className="container">

                <div class="profile-card">

                    <div class="profile-info">
                        <h1>Personal info</h1>

                        <div class="list-info">
                            <div class="names">
                                <Image src="http://localhost:3000/images/icon-fullName.png" className="img" />
                                <div class="name">
                                    <h1>Radif Ganteng</h1>
                                    <p>Full name</p>
                                </div>
                            </div>
                            <div class="emails">
                                <Image src="http://localhost:3000/images/icon-email.png" className="img" />
                                <div class="email">
                                    <h1>radifgans@gmail.com</h1>
                                    <p>Email</p>
                                </div>
                            </div>
                            <div class="phones">
                                <Image src="http://localhost:3000/images/icon-call.png" className="img" />
                                <div class="phone">
                                    <h1>0812-8263-8911</h1>
                                    <p>Mobile phones</p>
                                </div>
                            </div>
                            <div class="locations">
                                <Image src="http://localhost:3000/images/icon-location.png" className="img"/>
                                <div class="location">
                                    <h1>Perumahan Permata Bintaro Residence C-3</h1>
                                    <p>Address</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="profile-img">
                        <Image src="http://localhost:3000/images/user1.jpg" />
                        <a href={url} class="btn btn-outline-warning bg-warning text-white text-center">Change Photo Profile</a>
                    </div>

                </div>

                <div className="payments">
                    <PaymentCard />
                </div>   

            </div>
        </div>
    )
}