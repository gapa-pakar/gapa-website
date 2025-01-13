import React from 'react'
import flyer1 from '../../assets/Projects/Canva/1.mp4'
import flyer2 from '../../assets/Projects/Canva/2.png'
import flyer3 from '../../assets/Projects/Canva/3.png'
import flyer4 from '../../assets/Projects/Canva/4.png'
import flyer5 from '../../assets/Projects/Canva/5.png'
import flyer6 from '../../assets/Projects/Canva/6.png'
import flyer7 from '../../assets/Projects/Canva/7.png'
import flyer8 from '../../assets/Projects/Canva/8.mp4'
import flyer9 from '../../assets/Projects/Canva/9.png'
import flyer10 from '../../assets/Projects/Canva/10.png'
import flyer11 from '../../assets/Projects/Canva/11.png'
import flyer12 from '../../assets/Projects/Canva/12.png'
import flyer13 from '../../assets/Projects/Canva/13.png'
import flyer14 from '../../assets/Projects/Canva/14.mp4'
import flyer15 from '../../assets/Projects/Canva/15.png'
import flyer16 from '../../assets/Projects/Canva/16.png'

export default function Canva() {
  return (
    <div className='pb-20 md:px-32 bg-gray-200 dark:bg-gray-800 rounded-xl'>
      <h1 data-aos="fade-up" className='text-center font-bold text-4xl pt-20 pb-10 dark:text-white text-primary'>עיצוב ועריכה בתוכנת Canva</h1>
      <div className='m-0 px-5 sm:px-20 bp-20 box-border'>
        <div className='row'>
          <div className="column">
            <img src={flyer2} />
            <img src={flyer16} className='gallery-img max-h-[10rem] sm:max-h-[10rem]' />
            <img src={flyer9} />
            <img src={flyer13} className='gallery-img max-h-[10rem] sm:max-h-[40rem]' />
          </div>
          <div className="column">
            <img src={flyer5} />
            <video src={flyer8} className='pt-[5px]' controls autoPlay muted loop></video>
            <img src={flyer15} className='gallery-img max-h-[10rem] sm:max-h-[12rem]' />
          </div>
          <div className='column'>
            <video src={flyer1} className='pt-[5px]' controls autoPlay muted loop></video>
            <img src={flyer10} />
            <img src={flyer6} />
            <img src={flyer12} />
            <img src={flyer11} />
          </div>
          <div className='column'>
            <img src={flyer3} />
            <video src={flyer14} className='gallery-img pt-[5px] max-h-[10rem] sm:max-h-[20rem]' controls autoPlay muted loop></video>
            <img src={flyer7} />
            <img src={flyer5} />
          </div>
          <div className='column'>
            <img src={flyer4} />
            <img src={flyer9} />
            <img src={flyer4} />
            <img src={flyer3} />
          </div>
        </div>
      </div>
    </div>
  )
}
