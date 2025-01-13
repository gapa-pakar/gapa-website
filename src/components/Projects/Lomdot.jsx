import React from 'react'
import BlogCard from '../Blogs/BlogCard'
import lomda1 from '../../assets/Projects/Lomdot/search-and-rescue-introduction.png'
import lomda2 from '../../assets/Projects/Lomdot/rescue-medicine.png'
import lomda3 from '../../assets/Projects/Lomdot/treatment.png'
import lomda4 from '../../assets/Projects/Lomdot/square.png'

const BlogsData = [
    {
        id: 1,
        image: lomda1,
        title: "תעודת זהות חטיבת החילוץ",
        description: "רוצים להכיר לעומק את החטיבה מהקמתה ועד היום? הלומדה מציגה את כל המידע בצורה קלילה, חוויתית ואינטראקטיבית!",
        author: "תמר שנהב מפתחת לומדה",
        link: "https://gapa-pakar.github.io/search-and-rescue-introduction-phones/",
        aosDelay: "0"
    },
    {
        id: 2,
        image: lomda2,
        title: "רפואת חילוץ",
        description: "לומדת רפואת חילוץ מציגה הסבר על מחוללי הרס, טריאז' ותעדוף לכודים, סוגי פגיעות, גורמי מוות באירוע הרס ועוד.",
        author: "אמילי יצחק כותבת לומדה",
        link: "https://360.articulate.com/review/content/59529f38-405c-4bbd-8ba3-b2c3fed9fbff/review",
        aosDelay: "300"
    },
    {
        id: 3,
        image: lomda3,
        title: "פרוצדורות וטיפול תרופתי באירוע חילוץ",
        description: "לומדה בנושא פרוצדורות והטיפול התרופתי באירועי חילוץ. מציגה הסבר על פרוטוקול הערכה וניהול נתיב אוויר, הטיפול התרופתי בפצוע לכוד, פרוטוקול חזה ועוד.",
        author: "אמילי יצחק כותבת לומדה",
        link: "https://360.articulate.com/review/content/128d7375-5f2f-4871-84fa-f6f979e31558/review",
        aosDelay: "500"
    },
    {
        id: 4,
        image: lomda4,
        title: 'משולש הזה"ב ומרובע הקסם',
        description: 'הלומדה בנושא משולש הזה"ב ומרובע הקסם. מציגה הסבר על ההבדלים ביניהם, בעלי התפקידים הרלוונטיים, מקבלי ההחלטות ועוד.',
        author: "אמילי יצחק כותבת ללומדה",
        link: "https://360.articulate.com/review/content/f5b44ece-bfdc-4147adca-8e88e5fbbd1b/review",
        aosDelay: "700"
    },
]


export default function Lomdot() {
    return (
        <div>
            <div className=' sm:mt-0 lg:mt-10'>
                <div className='container py-12'>
                    <h1 data-aos="fade-up" className='text-center font-bold text-4xl dark:text-white text-primary'>לומדות</h1>
                </div>
                {/* Blogs Cards */}
                <div className='bg-gray-100 dark:bg-gray-800 
                                dark:text-white pt-20 rounded-xl container mb-20'>
                    <div className='container'>
                        <div className='grid grid-col-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-6'>
                            {BlogsData.map((blog) => {
                                return (
                                    <BlogCard key={blog.id} link={blog.link} page="true" blog={blog} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
