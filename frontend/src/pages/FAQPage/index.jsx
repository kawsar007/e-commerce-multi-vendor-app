import React from 'react'
import Header from '../../layout/Header';
import Faq from './Faq';
import Footer from '../../layout/Footer';

const FaqPage = () => {
    return (
        <div>
            <Header activeHeading={5} />
            <Faq />
            <Footer />
        </div>
    )
}

export default FaqPage;
