
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BlogCard(props) {

    const { blog, link, page } = props;

    const handleClick = () => {
        if (!page) {
            localStorage.setItem('pageSection', JSON.stringify(blog.element));
        }
    }

    return (
        <>
            <div data-aos="fade-up"
                data-aos-delay={blog.aosDelay} className='dark:text-white group'>
                <div className='overflow-hidden'>
                    <img src={blog.image} alt='' className='mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300' />
                    <Link to={link} target={page ? "_blank" : ""}>
                        <div className='space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16' onClick={handleClick}>
                            <h1 className='line-clamp-1 text-2xl font-semibold'>{blog.title}</h1>
                            <h1 className='line-champ-4 text-gray-500 text-sm'>{blog.description}</h1>
                            <div className='flex justify-end pr-4 text-gray-500' >
                                <FaArrowLeft className='group-hover:text-primary group-hover:translate-x-2 cursor-pointer duration-300' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}
