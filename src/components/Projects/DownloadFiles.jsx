import React from 'react'
import FilesCards from './FilesCards'

// documents
import document1 from '../../assets/Projects/Canva/document1.pdf'
import document2 from '../../assets/Projects/Canva/document2.pdf'
import document3 from '../../assets/Projects/Canva/document3.pdf'

// documents cover img
import document1Cover from '../../assets/Projects/Canva/document1.png'
import document2Cover from '../../assets/Projects/Canva/document2.png'
import document3Cover from '../../assets/Projects/Canva/document3.png'

const CampusFiles = [
    {
        id: 1,
        title: 'פק"לון עבודה קמפוס דיגיטלי לחניך',
        description: 'פק"לון המסביר על מערכת הקמפוס הדיגיטלי לחייל',
        img: document1Cover,
        link: document1,
        linkTitle: "פקלון קמפוס דיגיטלי לחניך"
    },
    {
        id: 2,
        title: 'פק"לון עבודה קמפוס דיגיטלי למפקד/ת',
        description: 'פק"לון המסביר על מערכת הקמפוס הדיגיטלי למפקד',
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
        link: document3,
        linkTitle: 'פקלון חניכה משקית צפה'
    }
]

export default function DownloadFiles() {
    return (
        <div >
            <div className='m-0 px-5 sm:px-20 bp-20 box-border'>
                {/* download files */}
                <div className='pr-10 sm:pr-0 dark:text-white'>
                    <hr className=' w-[80%] md:w-[100%] border-gray-300 dark:border-gray-700 border-[2px] my-10 mt-[5rem] md:mt-[10rem]'></hr>
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
                    <hr className='md:w-[100%] w-[80%] border-gray-300 dark:border-gray-700 border-[2px] my-10'></hr>

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
        </div>
    )
}
