import React from 'react'
import Navbar from './Navbar/Navbar'
import formImg from '../assets/forms.png'
import Footer from './Footer/Footer'

const Forms = [
    {
        id: 1,
        title: "פורמט בקשת מוצר גרפיקות",
        link: "https://forms.gle/kHfZ7QVTfBVxweFb7",
        aosDelay: "0"
    },
    {
        id: 2,
        title: "פורמט בקשת מוצר עיצוב בתוכנת Canva",
        link: "https://forms.gle/CHjk91xzyDjLRdCw5",
        aosDelay: "300"
    },
    {
        id: 3,
        title: "פורמט בקשת מוצר בניית אתרים",
        link: "https://forms.gle/eSMFXH8XV6Zv52rZ7",
        aosDelay: "500"
    },
    {
        id: 4,
        title: "פורמט בקשת מוצר פיתוח לומדות",
        link: "https://forms.gle/XaRViJ2LuJQueM7y8",
        aosDelay: "700"
    }
]

export default function Contact() {
    return (
        <div className='dark:bg-black'>
            <Navbar></Navbar>
            <div className='dark:text-white sm:mt-0 mr-4 lg:mt-10 mb-10'>
                <div className='container py-12'>
                    <h1 data-aos="zoom-in-down" className='text-right font-bold text-4xl pb-2 text-primary'>צרו איתנו קשר</h1>
                    <p data-aos="zoom-in-down" className='text-right font-bold text-4md pb-10'>אנחנו כאן לסייע ולעזור בכל דבר ולענות לכל צורך</p>
                    <div className='grid grid-col-1 gap-6'>
                        {Forms.map((form) => {
                            return (
                                <div key={form.id}>
                                    <a href={form.link} data-aos="fade-up" data-aos-delay={form.aosDelay}>
                                        <div className='bg-gray-200 dark:bg-gray-900 p-2 rounded-[20rem] flex flex-row items-center w-[20rem] sm:w-[24rem]'>
                                            <div className='bg-primary rounded-[20rem] w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center'>
                                                <img src={formImg} className='h-[1.2rem] sm:h-[1.8rem]'></img>
                                            </div>
                                            <p className='pr-3 sm:pr-5 font-bold text-[0.8rem] sm:text-[1rem]'>{form.title}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
