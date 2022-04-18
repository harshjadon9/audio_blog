import React from 'react';
import Price from '../components/pricing'
import Footer from '../components/footer'
import Navbar from '../components/navbar';
import Topnav from '../components/navoffer';
import Faq from '../components/faq';


function Pricing(props) {
    return (
        <div>
            <Topnav />
            <Navbar classes={"absolute"}/>
            <Price />
            <Faq />
            <Footer/>
        </div>
    );
}

export default Pricing;