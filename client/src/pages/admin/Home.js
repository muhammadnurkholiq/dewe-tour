import React from 'react';
import "../../assets/css/home-admin.css";

// component
import Jumbotron from "../../components/jumbotron";
import InfoCard from "../../components/info_card";
import Tour from "../../components/admin/tour";
import Footer from "../../components/footer";

function Home() {
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
                
                {/* footer  */}
                <Footer />
                {/* ending footer  */}
            </div>
        );
}

export default Home;
