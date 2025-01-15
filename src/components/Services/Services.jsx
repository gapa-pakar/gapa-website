
import React from 'react'
import { MdComputer } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const skillsData = [
    {
        name: "פיתוח לומדות",
        icon: <GiNotebook className='text-4xl text-primary' />,
        link: '#',
        description:
            "לומדה היא תוצר הדרכה אינטראקטיבי. הלומדה באה לידי ביטוי בצורת אתר, משחק או אפליקציה. באמצעות לומדות ניתן להפחית משמעותית בכמות השיעורים בנושא מסוים, להעשיר את הלמידה ולהפוך אותה לחווייתית בהוספת אלמנטים חזותיים, ואינטראקטיביות. כך, הלומדה מאפשרת ייעול זמנים וחסכון במשאבים (ניתן להוסיף סימולציות המדמות אירועים שונים), מגוונת את הלמידה ומאפשרת ווידוא הבנה (ניתן להוסיף מבחן או שאלון במהלך הלומדה).",
        aosDelay: "0"
    },
    {
        name: "בניית אתרים",
        icon: <MdComputer className='text-4xl text-primary' />,
        link: '#',
        description:
            "הצגת מידע באופן דיגיטלי",
        aosDelay: "300"
    },
    {
        name: "גרפיקות ועיצוב",
        icon: <SlNote className='text-4xl text-primary' />,
        link: '#',
        description:
            'גרפיקות, עיצוב סמלים, שלטים, הזמנות לכנסים, פק"לונים, כריכות לספרים, עריכה בתוכנת Canva.',
        aosDelay: "500"
    },
    {
        name: "צילום ועריכה",
        icon: <FaCameraRetro className='text-4xl text-primary' />,
        link: '#',
        description:
            "צילום תמונות ועריכת וידאו של תוצרי הדרכה בצורת סרטונים לכדי כלי ללמידה",
        aosDelay: "700"
    }
]

export default function Services() {
    return (
        <>
            <div className='bg-gray-100 dark:bg-black dark:text-white 
            py-12 sm:grid sm:place-items-center'>
                <div className='container'>
                    {/* Header Section */}
                    <div className='pb-12 text-center space-y-3'>
                        <h1 data-aos="fade-up" className='text-3xl font-semibold text-violet-950 dark:text-primary'>כיצד אנחנו יכולים לעזור?</h1>
                        <p data-aos="fade-up" data-aos-delay="300">אנחנו עוסקים במציאת פתרונות הדרכתיים ופיתוח תוצרי הדרכה בשילוב טכנולוגיה וחדשנות.
                        </p>
                    </div>
                    {/* Card Section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 
                    xl:grid-cols-4 gap-4'>
                        {skillsData.map((skill) => {
                            return (
                                <div data-aos="fade-up" data-aos-delay={skill.aosDelay}
                                    key={skill.name} className='card space-y-3 
                                sm:space-y-4 p-4'>
                                    <div>{skill.icon}</div>
                                    <h1 className='text-lg font-semibold'>{skill.name}</h1>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        {skill.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    {/* Button Section */}
                    <div data-aos="fade-up" 
                    data-aos-delay="900"
                    data-aos-offset="0"  
                    className='text-center mt-4 sm:mt-8'>
                        <button className='btn-primary'><Link to='/projects'>תוצרי הדרכה</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
