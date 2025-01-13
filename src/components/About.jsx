
import React from 'react'
import Navbar from './Navbar/Navbar'
import video from '../assets/video.mp4'
import Footer from './Footer/Footer'

export default function About() {
    return (
        <div className='overflow-x-hidden bg-white dark:bg-black dark:text-white duration-300 font-heebo'>
            <Navbar></Navbar>
            <div className='space-y-5 order-2 sm:order-1 m-5 flex text-center justify-center'>
                <h1 data-aos="fade-up" className='text-4xl sm:text-5xl font-extrabold leading-8'>גוף פיתוח הדרכה{" "}
                    <br />
                    <span className='text-primary leading-8'>חטיבת החילוץ</span></h1>
            </div>
            <div className='flex justify-center m-10'>
                <video height='500' width='300' src={video} controls autoPlay></video>
            </div>
            <Footer></Footer>
        </div>
    )
}
