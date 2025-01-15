import React from 'react'
import Navbar from './Navbar/Navbar'
import formImg from '../assets/forms.png'
import Footer from './Footer/Footer'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

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

const Contacts = [
    {
        id: "phone",
        title: "דברו איתנו בטלפון",
        description: "נהוראי גרין"
    },
    {
        id: "whatsapp",
        title: "שלחו לנו הודעה",
        description: "לחצו על הקישור"
    },
    {
        id: "mail",
        title: "כתבו לנו במייל",
        description: "gapa.rescue@gmail.com",
    }
]



export default function Contact() {
    return (
        <div className='dark:bg-black'>
            <Navbar></Navbar>
            <div className='flex justify-center'>
                <div className='dark:text-white sm:mt-0 lg:mt-10 mb-[15rem] flex flex-col md:flex-row'>
                    <div className='container py-12 flex flex-col justify-center items-center md:block'>
                        <h1 data-aos="zoom-in-down" className='text-right font-bold text-2xl md:text-3xl pb-2 text-primary'>צרו איתנו קשר</h1>
                        <p data-aos="zoom-in-down" className='text-right font-bold text-[0.9rem] md:text-[1rem] pb-10'>אנחנו כאן לסייע ולעזור בכל דבר ולענות לכל צורך</p>
                        <div className='grid grid-col-1 gap-6 md:bg-gray-200 md:dark:bg-gray-700 md:p-10 md:pl-[24rem] rounded-xl'>
                            {Forms.map((form) => {
                                return (
                                    <div key={form.id}>
                                        <a href={form.link} data-aos="fade-up" data-aos-delay={form.aosDelay}>
                                            <div className='bg-gray-200 md:bg-gray-300 dark:bg-gray-800 p-2 rounded-[20rem] flex flex-row items-center w-[20rem] sm:w-[24rem]'>
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
                    <div className='md:py-[3rem] flex flex-col justify-center items-center md:block'>
                        {Contacts.map((form) => {
                            return (
                                <div key={form.id}>
                                    <div className='flex flex-col text-center items-center justify-center mb-5 bg-gray-200 dark:bg-gray-700 rounded-xl w-[15rem] md:w-[20rem] h-[8rem] md:h-[10rem]'>
                                        {form.id === "phone" ? <FaPhoneAlt className='ml-2 size-7' /> : form.id === "whatsapp" ? <IoLogoWhatsapp className='ml-2 size-7' /> : <IoMdMail className='ml-2 size-7' />}
                                        <h1 className='mt-2 font-bold md:text-[1.2rem]'>{form.title}</h1>
                                        <p className='text-[0.9rem] md:text-[1rem]'>{form.description}<span className='mr-2'>{form.id === "phone" ? "050-545-2889" : ""}</span></p>
                                    </div>
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
