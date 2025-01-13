
import React from 'react'
import Slider from 'react-slick'
import quotes from '../../assets/quotes.png'

const testimonialData = [
    {
        id: 1,
        name: "-- ג'ורג' קורוס --",
        text: '".טכנולוגיה אינה מחליפה מורים גדולים, אך טכנולוגיה בידיים של מורים גדולים יכולה להוביל לשינוי"',        
        img: quotes
    },
    {
        id: 2,
        name: "-- ג'ניפר פלמינג --",
        text: '".הוראה בעידן האינטרנט פירושה שעלינו ללמד את המיומנויות של מחר היום"',
        img: quotes 
    },
    {
        id: 3,
        name: "-- קוני מלמד --",
        text: '".אחד התחומים החשובים ביותר שאנו יכולים לפתח כאנשי מקצוע הוא יכולת גישה ושיתוף ידע"',
        img: quotes
    }
]

export default function Testimonials() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='py-10 dark:text-white'>
                <div data-aos="fade-up" className='container'>
                    {/* Testimonial Section */}
                    <div className='grid grid-cols-1 max-w-screen-xl md:auto gap-6'>
                        <Slider {...settings}>
                            {
                                testimonialData.map(({ id, name, text, img }) => {
                                    return (
                                        <div key={id} className='my-6'>
                                            <div className='flex flex-col sm:flex-row
                                            gap-5 md:gap-40 p-4 mx-5 rounded-xl 
                                            dark:bg-gray-800 relative'>
                                                <img src={img} alt='' className='block mx-auto h-[300px] w-full
                                                xl:w-[600px] object-cover'/>
                                                <div className='space-y-4'>
                                                    <p className='font-bold '>{text}</p>
                                                    <h1 className='text-gray-500 text-black/80 
                                                dark:text-white/80 x:pr-40 absolute right-0'>{name}</h1>
                                                </div>
                                                <p className='text-black/10 text-[12rem]
                                                font-serif absolute bottom-0 right-0'>,,</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
