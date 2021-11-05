import React from 'react';
import "../../assets/css/home.css";

// component
import Jumbotron from "../../components/jumbotron";
import InfoCard from "../../components/info_card";
import Tour from "../../components/user/tour";

export default function Home() {
    const title = "Home"
    document.title = 'Dewe Tour | ' + title

    return (
        <div className="home">

            {/* jumbotron */}
            <Jumbotron />
            {/* ending Jumbotron */}

            {/* Info Card */}
            <InfoCard />
            {/* ending Info Card */}

            {/* Tour */}
            <Tour />
            {/* ending Tour */}
        </div>
    );
}