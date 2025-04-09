
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
            "לומדה היא מערכת למידה אינטראקטיבית ממוחשבת שנועדה להעביר ידע, מיומנות או הכשרה למשתמשים באופן דיגיטלי. לומדות משלבות תוכן טקסטואלי, מולטימדיה (כגון וידאו, אודיה ואנימציות) ותרגולים אינטראקטיביים, כדי לשפר את חוויית הלמידה ולהתאים אותה לצורכי הלומד. כך ניתן להפחית בכמות השיעורים בנושא מסויים, להעשיר את הלמידה ולהפוך אותה לחווייתית.",
        aosDelay: "0"
    },
    {
        name: "בניית אתרים",
        icon: <MdComputer className='text-4xl text-primary' />,
        link: '#',
        description:
            "תכנון ועיצוב אתרים מותאמים אישית המהווים פתרון דיגיטלי לצורכי הצגת מידע והנגשה למספר רחב יותר של אנשים.",
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
            "צילום תמונות ועריכת וידאו עבור תוכן הדרכתי או חינוכי. הצוות שלנו משתמש בציוד מקצועי ובטכנולוגיות חדישות כדי ליצור סרטונים ותמונות באיכות גבוהה, תוך שימת דגש על תוכן ברור, מדוייק ומעניין. הסרטונים והתמונות עוברים תהליך עריכה שכולל הוספת טקסטים, כתוביות, אנימציות, אפקטים קוליים ומוזיקה.",
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
                        {skillsData.map((skill) => (
                            <div data-aos="fade-up" data-aos-delay={skill.aosDelay}
                                key={skill.name} className='card space-y-3 sm:space-y-4 p-4'>
                                <div>{skill.icon}</div>
                                <h1 className='text-lg font-semibold'>{skill.name}</h1>
                                <p className='text-gray-600 dark:text-gray-400'>
                                    {skill.description}
                                </p>
                            </div>
                        ))}
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
