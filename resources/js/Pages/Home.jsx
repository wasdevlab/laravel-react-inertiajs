import React from 'react';
import { usePage } from '@inertiajs/react';

import AppLayout from '../Layouts/AppLayout';


const Home = () => {
    const { props } = usePage(); // Correctly using a hook inside the component

    console.log(props)
    
    return (
        <AppLayout>
            <h1>Welcome to the Home Page. </h1>
        </AppLayout>
    );
};

export default Home;
