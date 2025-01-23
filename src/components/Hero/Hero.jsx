import React from 'react'
import HeroImg from '../../assets/design.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
        <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
            <div className='container bg-gray-200 dark:bg-gray-900 rounded-xl sm:min-h-[560px] min-h-[720px] max-w-[90%] flex mt-10 sm:mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-20 place-items-center'>
                    {/* Image Section */}
                    <div data-aos="zoom-in" className='order-1 sm:order-2 relative'>
                        <img src={HeroImg} alt="HeroImg" className='sm:max-w-[25rem] max-w-[14rem] mt-4 sm:mt-0'/>
                        {/* <div data-aos="slide-right" 
                        data-aos-delay="300" 
                        className='bg-white dark:bg-gray-900 px-4 
                        py-2 rounded-xl shadow-md absolute -bottom-5 right-0 sm:-right-8'>
                            <p>⭐ Projects</p>
                            <h1 className='font-bold'>
                                10+ <span className='font-normal'>Done</span>
                            </h1>
                        </div> */}
                    </div>
                    {/* Text Content Section */}
                    <div className='space-y-5 order-2 sm:order-1
                    xl:pr-40'>
                        <h1 data-aos="fade-up" className='text-4xl sm:text-5xl leading-10 font-extrabold'>גוף פיתוח הדרכה{" "}
                            <br/>
                            <span className='text-primary leading-8'>חטיבת החילוץ</span></h1>
                        <p data-aos="fade-up" data-aos-delay="300" className='leading-7 text-sm'>האגף שלנו כולל בתחומו את כל פיתוח ההדרכה בחטיבה. אנחנו אחראים על פיתוח תכני הדרכה, בניית מערכי שיעור, כתיבת חומרי לימוד ועיצוב תכניות הכשרה עבור יחידות צה"ל. המטרה היא לשפר את הידע והיכולת של החיילים והמפקדים בתחומים השונים על ידי מתן כלים פדגוגיים ושיטות הוראה אפקטיביות.
                        </p>
                        <button data-aos="fade-up" 
                        data-aos-delay="500" 
                        className='btn-primary transition-all duration-300'><Link to='/About'>בואו נכיר</Link></button>
                    </div>
                    
                </div>
            </div>
        </main>
    </>
  )
}
