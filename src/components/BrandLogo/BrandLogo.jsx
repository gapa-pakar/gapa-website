
import React from 'react'
import Brand1 from '../../assets/Symbols/1.avif'
import Brand2 from '../../assets/Symbols/2.avif'
import Brand3 from '../../assets/Symbols/3.avif'
import Brand4 from '../../assets/Symbols/4.avif'
import Brand5 from '../../assets/Symbols/5.avif'
import Brand6 from '../../assets/Symbols/6.avif'
import Brand7 from '../../assets/Symbols/7.avif'
import Brand8 from '../../assets/Symbols/8.avif'

const BrandsArray = [
    {
        img: Brand1,
        alt: "Brand1"
    },
    {
        img: Brand2,
        alt: "Brand2"
    },
    {
        img: Brand3,
        alt: "Brand3"
    },
    {
        img: Brand4,
        alt: "Brand4"
    },
    {
        img: Brand5,
        alt: "Brand5"
    },
    {
        img: Brand6,
        alt: "Brand6"
    },
    {
        img: Brand7,
        alt: "Brand7"
    },
    {
        img: Brand8,
        alt: "Brand8"
    }
]

export default function BrandLogo() {
    return (
        <>
            <div className='dark:bg-gray-900 dark:text-white mt-10'>
                <div className='container py-12'>
                    <h1 data-aos="fade-up" className='text-center font-bold'>הכנת תוצרים לכלל חטיבת החילוץ וההדרכה</h1>
                    <div data-aos="fade-up"
                        data-aos-delay="300"
                        className='flex flex-wrap items-center justify-center gap-3 py-6 px-10 md:px-32'>
                        {
                            BrandsArray.map((item, index) => (
                                <img key={index} src={item.img} alt={item.alt} className={index !== BrandsArray.length - 1 ? 'w-10' : 'w-6'} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
