
import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import BrandLogo from './BrandLogo/BrandLogo'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'
import Blogs from './Blogs/Blogs'
import Footer from './Footer/Footer'

export default function HomePage() {
    
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
