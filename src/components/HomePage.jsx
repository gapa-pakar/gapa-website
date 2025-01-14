
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import BrandLogo from './BrandLogo/BrandLogo'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'
import Blogs from './Blogs/Blogs'
import Footer from './Footer/Footer'
import Loading from './Loading'


export default function HomePage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className='overflow-x-hidden bg-white dark:bg-black 
                    duration-300 font-heebo'>
                <Navbar></Navbar>
                <Hero></Hero>
                <BrandLogo></BrandLogo>
                <Services></Services>
                <Testimonials></Testimonials>
                <Blogs></Blogs>
                <Footer></Footer>
            </div>
        </>
    )
}

