import React from 'react';
import { useLocation } from 'react-router';

const Checkout = () => {
    const location = useLocation()
    console.log(location.state)
    return (
        <div>
            checkout

        </div>
    );
};

export default Checkout;