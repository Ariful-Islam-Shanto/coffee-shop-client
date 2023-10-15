import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Services from '../../Components/Services/Services';
import Products from '../../Components/Products/Products';
import Feature from '../../Components/Feature/Feature';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-24 py-12 bg-[#ECEAE3]'>
            <Services></Services>
            </div>
            <div>
                <Products></Products>
            </div>
            <div>
            <Feature></Feature>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;