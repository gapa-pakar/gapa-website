
import React from 'react'
import BlogCard from './BlogCard'

const BlogsData = [
    {
        id: 1,
        image: "https://picsum.photos/101/101",
        title: "Realtime analytics",
        description: "we are the serach and reacue we are going to rescue from the world because we are freedom fighters the mission ahead the people always it's time to discover the meaning of life in the soldiers unit",
        author: "Liam and Roni the official coffee makers",
        date: "November 26, 2024",
        aosDelay: "0"
    },
    {
        id: 2,
        image: "https://picsum.photos/102/102",
        title: "Realtime analytics",
        description: "we are the serach and reacue we are going to rescue from the world because we are freedom fighters the mission ahead the people always it's time to discover the meaning of life in the soldiers unit",
        author: "Liam and Roni the official coffee makers",
        date: "November 26, 2024",
        aosDelay: "300"
    },
    {
        id: 3,
        image: "https://picsum.photos/103/103",
        title: "Realtime analytics",
        description: "we are the serach and reacue we are going to rescue from the world because we are freedom fighters the mission ahead the people always it's time to discover the meaning of life in the soldiers unit",
        author: "Liam and Roni the official coffee makers",
        date: "November 26, 2024",
        aosDelay: "500"
    }
]

export default function Blogs() {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-900 
            dark:text-white py-10 pb-14'>
                <div className='container'>
                    <h1 data-aos="fade-up" className='my-8 border-l-8 border-primary/50
                    pl-2 text-3xl font-semibold'>Our Blogs</h1>
                    {/* Blogs Cards */}
                    <div className='grid grid-col-1 md:grid-cols-2 
                    lg:grid-cols-3 gap-6'>
                        {BlogsData.map((blog) => {
                            return (
                                <BlogCard key={blog.id} blog={blog} />
                            )
                        })}
                    </div>
                    <div data-aos="fade-up" data-aos-offset="0" className='text-center'>
                        <button className='btn-primary'>View All Posts</button>
                    </div>
                </div>
            </div>
        </>
    )
}
