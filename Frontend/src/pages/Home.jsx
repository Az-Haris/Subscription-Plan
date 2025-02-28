import React from 'react';
import Banner from '../components/Banner';
import SectionGap from '../utils/SectionGap';
import Products from '../components/Products';
import WhyChoose from '../components/WhyChoose';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SectionGap></SectionGap>
            <main>
                <Products></Products>
                <SectionGap></SectionGap>
                <WhyChoose></WhyChoose>
                
            </main>
        </>
    );
};

export default Home;