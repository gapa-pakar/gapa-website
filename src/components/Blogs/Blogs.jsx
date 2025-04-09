
import React, { useEffect } from 'react'
import BlogCard from './BlogCard'
import graphics from '../../assets/graphics.png'
import canva from '../../assets/canva.png'
import learning from '../../assets/e-learning.png'
import { Link } from 'react-router-dom'

const BlogsData = [
    {
        id: 1,
        image: graphics,
        title: "גרפיקות",
        description: "גרפיקות לסרטוני אנימציה קצרים, עדכון סמלי החטיבה, הכנת סמלים חדשים ועוד.",
        author: "שקד שואן גרפיקאית חטיבת החילוץ",
        link: "/projects",
        element: "graphics",
        aosDelay: "0"
    },
    {
        id: 2,
        image: canva,
        title: "עיצוב ועריכה בתוכנת canva",
        description: 'הכנת כריכות לספרים, פלייארים, פוסטרים, טפטים, פק"לונים, הזמנות לכנסים ועוד.',
        author: "ליאם דיחמט עורך חטיבת החילוץ",
        link: "/projects",
        element: "canva",
        aosDelay: "300"
    },
    {
        id: 3,
        image: learning,
        title: "פיתוח לומדות",
        description: "לומדת תעודת זהות חטיבת החילוץ וההדרכה, לומדת כרמל, לומדת רפואת חילוץ ועוד.",
        author: "מפתחות לומדה וכותבות לומדה חטיבת החילוץ",
        link: "/projects",
        element: "lomdot",
        aosDelay: "500"
    }, 

]

export default function Blogs() {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-900 
            dark:text-white py-10 pb-14'>
                <div className='container'>
                    <h1 data-aos="fade-up" className='my-8 border-l-8 border-primary/50
                    pl-2 text-3xl font-semibold'>תוצרי האגף</h1>
                    {/* Blogs Cards */}
                    <div className='grid grid-col-1 md:grid-cols-2 
                    lg:grid-cols-3 gap-6'>
                        {BlogsData.map((blog) => {
                            return (
                                <BlogCard key={blog.id} link={blog.link} page={false} blog={blog} />
                            )
                        })}
                    </div>
                    <div data-aos="fade-up" data-aos-offset="0" className='text-center'>
                        <button className='btn-primary'><Link to='/projects'>לצפות בכל התוצרים</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
