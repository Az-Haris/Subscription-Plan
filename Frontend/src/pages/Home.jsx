import React from 'react';
import Banner from '../components/Banner';
import SectionGap from '../utils/SectionGap';
import WhyChoose from '../components/WhyChoose';
import Plans from '../components/Plans';
import Category from '../components/Category';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    return (
        <>
        <ScrollToTop></ScrollToTop>
            <Banner></Banner>
            <Category></Category>
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