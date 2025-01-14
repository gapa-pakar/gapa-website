import React from 'react'
import FilesCards from './FilesCards'

// flyers gallery
import flyer1 from '../../assets/Projects/Canva/1.mp4'
import flyer2 from '../../assets/Projects/Canva/2.png'
import flyer3 from '../../assets/Projects/Canva/3.png'
import flyer4 from '../../assets/Projects/Canva/4.png'
import flyer5 from '../../assets/Projects/Canva/5.png'
import flyer6 from '../../assets/Projects/Canva/6.png'
import flyer7 from '../../assets/Projects/Canva/7.mp4'
import flyer8 from '../../assets/Projects/Canva/8.png'
import flyer9 from '../../assets/Projects/Canva/9.png'
import flyer10 from '../../assets/Projects/Canva/10.png'
import flyer11 from '../../assets/Projects/Canva/11.png'
import flyer12 from '../../assets/Projects/Canva/12.mp4'
import flyer13 from '../../assets/Projects/Canva/13.png'
import flyer14 from '../../assets/Projects/Canva/14.png'

// documents
import document1 from '../../assets/Projects/Canva/document1.pdf'
import document2 from '../../assets/Projects/Canva/document2.pdf'

// documents cover img
import document1Cover from '../../assets/Projects/Canva/document1.png'
import document2Cover from '../../assets/Projects/Canva/document2.png'
import document3Cover from '../../assets/Projects/Canva/document3.png'


const CampusFiles = [
  {
    id: 1,
    title: 'פק"לון עבודה קמפוס דיגיטלי לחניך',
    description: "יחלעחעיעכעיכעיככ ייחעחיעיח חילחיחל",
    img: document1Cover,
    link: document1,
    linkTitle: "פקלון קמפוס דיגיטלי לחניך"
  },
  {
    id: 2,
    title: 'פק"לון עבודה קמפוס דיגיטלי למפקד',
    description: "ילחחיעכיעכ עחיעחיעח עחעחע",
    img: document2Cover,
    link: document2,
    linkTitle: "פקלון קמפוס דיגיטלי למפקד"
  }
]

const DevelopTeamFiles = [
  {
    id: 100,
    title: 'פק"לון חניכה מש"קית צפ"ה',
    description: "למפקד",
    img: document3Cover,
    link: document1
  },
  {
    id: 200,
    title: 'ניסוח מטרות לשנה',
    description: "למפקד",
    img: document3Cover,
    link: document1
  },
  {
    id: 300,
    title: 'בניית שאלות למבחנים',
    description: "למפקד",
    img: document3Cover,
    link: document1
  },
  {
    id: 400,
    title: 'פק"לון חניכה למפקד',
    description: "למפקד",
    img: document3Cover,
    link: document1
  },
  {
    id: 500,
    title: 'פק"לון איתור צרכים',
    description: "למפקד",
    img: document3Cover,
    link: document1
  }
]

export default function Canva() {
  return (
    <div className='pb-20 md:px-32 bg-gray-200 dark:bg-gray-800 rounded-xl'>
      <h1 data-aos="fade-up" className='text-center font-bold text-4xl pt-20 pb-10 dark:text-white text-primary'>עיצוב ועריכה בתוכנת Canva</h1>
      <div className='m-0 px-5 sm:px-20 bp-20 box-border'>
        <div className='row'>
          <div className="column">
            <img src={flyer2} />
            <img src={flyer14} className='gallery-img max-h-[10rem] sm:max-h-[10rem]' />
            <img src={flyer8} />
          </div>
          <div className="column">
            <img src={flyer5} />
            <video src={flyer7} className='pt-[5px]' controls autoPlay muted loop></video>
          </div>
          <div className='column'>
            <video src={flyer1} className='pt-[5px]' controls autoPlay muted loop></video>
            <img src={flyer9} />
            <img src={flyer11} />
            <img src={flyer10} />
            <img src={flyer4} />
          </div>
          <div className='column'>
            <img src={flyer3} />
            <video src={flyer12} className='gallery-img pt-[5px] max-h-[10rem] sm:max-h-[20rem]' controls autoPlay muted loop></video>
            <img src={flyer6} />
            <img src={flyer13} className='gallery-img max-h-[10rem] sm:max-h-[12rem]' />
          </div>
          <div className='column'>
            <img src={flyer8} />
            <img src={flyer5} />
          </div>
        </div>
      </div>

      {/* download files */}
      <div className='pr-10 sm:pr-0 dark:text-white'>
      <hr className='w-[100%] border-gray-300 dark:border-gray-700 border-[2px] my-10 mt-[10rem]'></hr>
        <div className='mt-[2rem] font-bold text-2xl'>קבצים להורדה לשימושכם</div>
        {/* campus */}
        <p className='pt-4 pb-2 font-bold'>קמפוס דיגיטלי</p>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-5'>
          {CampusFiles.map((file) => {
            return (
              <FilesCards key={file.id} file={file}></FilesCards>
            )
          })}
        </div>
        <hr className='w-[100%] border-gray-300 dark:border-gray-700 border-[2px] my-10'></hr>

        {/* DeveloperTeam */}
        <p className='pt-4 pb-2 font-bold'>צוות פיתוח הדרכה (צפ"ה)</p>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-5'>
          {DevelopTeamFiles.map((file) => {
            return (
              <FilesCards key={file.id} file={file}></FilesCards>
            )
          })}
        </div>
      </div>
    </div>
  )
}
