import React from 'react';
import Banner from '../components/Banner';
import SectionGap from '../utils/SectionGap';
import WhyChoose from '../components/WhyChoose';
import Plans from '../components/Plans';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SectionGap></SectionGap>
            <main>
                <Plans></Plans>
                <SectionGap></SectionGap>
                <WhyChoose></WhyChoose>
                
            </main>
        </>
    );
};

export default Home;