import React from 'react';
import Title from './Title';
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <section className='container mx-auto px-3'>
            <Title title={"All Plans"} description={"Choose the best plans"}></Title>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            </div>
        </section>
    );
};

export default Products;