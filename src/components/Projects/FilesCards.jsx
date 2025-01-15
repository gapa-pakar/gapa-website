import React from 'react'
import download from '../../assets/Projects/Canva/download.png'



export default function FilesCards(props) {

    const {file} = props;

    return (
        <div key={file.id}>
            <div className='bg-white dark:bg-gray-900 dark:text-white w-[18rem] md:w-[19rem] h-[12rem] md:h-[15rem] ml-8 mb-5 flex rounded-xl'>
                <img src={file.img} className='h-[12rem] md:h-[15rem] w-[9rem] rounded-xl'></img>
                <div className='flex flex-col text-center w-[9rem] md:w-[10rem] px-4 items-center'>
                    <div className='pt-4 text-[0.9rem] md:text[1rem] font-bold'>{file.title}</div>
                    <p className='pt-2 text-[0.7rem] md:text-[0.8rem]'>{file.description}</p>
                    <p className='pt-1 md:pt-2 text-[0.9rem] md:text[1rem] font-bold text-primary'>להורדה לחצו</p>
                    <a href={file.link} download={file.linkTitle}>
                        <img src={download} className='w-[2rem] md:mt-1 hover:border-primary border-[2px] rounded-[20rem]'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
