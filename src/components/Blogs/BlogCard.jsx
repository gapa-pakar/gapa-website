
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function BlogCard(props) {

    const { blog, link, page, element } = props;

    return (
        <>
            <div data-aos="fade-up"
                data-aos-delay={blog.aosDelay} className='dark:text-white group'>
                <div className='overflow-hidden'>
                    <img src={blog.image} alt=''
                        className='mx-auto h-[420px] w-full object-cover
                    group-hover:scale-105 duration-300'/>
                    <div className='space-y-2 p-4 ml-6 bg-white 
                    dark:bg-slate-950 -translate-y-16'>
                        <h1 className='line-clamp-1 text-2xl font-semibold'>{blog.title}</h1>
                        <h1 className='line-champ-4 text-gray-500 text-sm'>{blog.description}</h1>
                        <div className='flex justify-end pr-4 text-gray-500'>
                            <a href={link} target={page ? "_blank" : ""}><FaArrowLeft className='group-hover:text-primary
                            group-hover:translate-x-2 cursor-pointer duration-300'/></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
