
import React from 'react'
import Navbar from './Navbar/Navbar'
import video from '../assets/video.mp4'
import Footer from './Footer/Footer'

const info = [
    {
        id: 1,
        title: "אפיון צרכים",
        description: "זיהוי הצרכים ההדרכתיים של החטיבה."
    },
    {
        id: 2,
        title: "פיתוח תוכניות הדרכה",
        description: "יצירה של תוכניות לימוד, חומרי לימוד וכלים שיאפשרו למידה אפקטיבית."
    },
    {
        id: 3,
        title: "הערכה ומדידה",
        description: "מדידת אפקטיביות התהליכים, כולל הערכה של תוכן ההדרכה ושל השפעתה על הביצועים."
    }
]

export default function About() {
    return (
        <div className='overflow-x-hidden bg-white dark:bg-black dark:text-white duration-300 font-heebo'>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center'>
                <div className='mt-7'>
                    <h1 data-aos="fade-up" className='text-2xl text-primary sm:text-4xl font-bold leading-8'>גוף פיתוח הדרכה{" "}
                        {/* <br />
                    <span className='text-primary leading-8'>חטיבת החילוץ</span> */}
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center m-10 bg-gray-200 dark:bg-gray-900 p-[2rem] md:p-[4rem] rounded-xl'>
                    <div className='md:ml-[6rem] mb-10 md:mb-0 flex flex-col bg-white dark:bg-gray-700 p-10 rounded-xl'>
                        <div className='font-bold text-xl md:text-2xl text-primary'>מי אנחנו?</div>
                        <div className='md:text-[1.1rem] text-[0.8rem] font-medium mt-2 leading-8'>אנחנו אחראים לפיתוח תהליכים, מערכים וכלים המיועדים להדרכה ולמידה.<br></br>האגף מתמקד ביישום ויצירת תוכניות הכשרה המסייע בייעול ושיפור הכישורים וקידום מטרות הלמידה.</div>
                        <div className='text-primary font-bold mt-4 md:text-[1.2rem]'>תפקידי גוף פיתוח ההדרכה כוללים:</div>
                        <ol className='mt-2 list-decimal mr-4 font-semibold'>
                            {
                                info.map((element, index) => {
                                    return (
                                        <li key={index} className='mb-4 text-[0.8rem] md:text-[1rem] leading-6'>
                                            <div>{element.title}</div>
                                            <div className='font-normal'>{element.description}</div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                    <video height='500' width='300' src={video} controls autoPlay className='rounded-xl'></video>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
