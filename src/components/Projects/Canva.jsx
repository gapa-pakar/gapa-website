import React from 'react'
import FilesCards from './FilesCards'

// flyers gallery
import flyer1 from '../../assets/Projects/Canva/1.png'
import flyer2 from '../../assets/Projects/Canva/2.png'
import flyer3 from '../../assets/Projects/Canva/3.png'
import flyer4 from '../../assets/Projects/Canva/4.mp4'
import flyer5 from '../../assets/Projects/Canva/5.png'
import flyer6 from '../../assets/Projects/Canva/6.mp4'
import flyer7 from '../../assets/Projects/Canva/7.png'
import flyer8 from '../../assets/Projects/Canva/8.png'
import flyer9 from '../../assets/Projects/Canva/9.png'
import flyer10 from '../../assets/Projects/Canva/10.png'
import flyer11 from '../../assets/Projects/Canva/11.png'
import flyer12 from '../../assets/Projects/Canva/12.mp4'
import flyer13 from '../../assets/Projects/Canva/13.png'
import flyer14 from '../../assets/Projects/Canva/14.png'
import flyer15 from '../../assets/Projects/Canva/15.png'
import flyer16 from '../../assets/Projects/Canva/16.png'

const canvaProjects = {
  images: [
    [flyer1, flyer2, flyer3],
    [flyer4, flyer5],
    [flyer6, flyer7, flyer8, flyer9, flyer10],
    [flyer11, flyer12, flyer13, flyer14],
    [flyer15, flyer16]
  ],

  type: {
    img: [flyer1, flyer2, flyer3, flyer5, flyer7, flyer8, flyer9, flyer10, flyer11, flyer13, flyer14, flyer15, flyer16],
    video: [flyer4, flyer6, flyer12]
  },

  class: [
    ['', '', ''],
    ['w-full h-[40.9vh] object-cover', ''],
    ['', '', '', 'w-full h-[17.5vh] object-cover', ''],
    ['', '', '', 'w-full h-[19.4vh] object-cover'],
    ['w-full h-[40.2vh] object-cover', '']
  ],
}



export default function Canva() {
  return (
    <div className='pb-20 md:px-32 bg-gray-200 dark:bg-gray-800 rounded-xl'>
      <h1 data-aos="fade-up" className='text-center font-bold text-4xl pt-20 pb-10 dark:text-white text-primary'>עיצוב ועריכה בתוכנת Canva</h1>
      <div className='m-0 px-5 sm:px-20 bp-20 box-border'>
        <div className='row'>
          {
            canvaProjects.images.map((item, index) => (
              <div className='column' key={index}>
                {
                  item.map((img, i) => {
                    return (
                      <div key={i}>
                        {canvaProjects.type.img.includes(img) && <img src={img} className={canvaProjects.class[index][i]} />}
                        {canvaProjects.type.video.includes(img) && <video src={img} type='video/mp4' preload='true' autoPlay muted loop className={`pt-[5px] ${canvaProjects.class[index][i]}`} ></video>}
                      </div>
                    )
                  })
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
