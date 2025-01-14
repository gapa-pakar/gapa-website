import React from 'react'
import download from '../../assets/Projects/Canva/download.png'



export default function FilesCards(props) {

    const {file} = props;

    return (
        <div key={file.id}>
            <div className='bg-white w-[21rem] h-[14rem] ml-8 flex rounded-xl'>
                <img src={file.img} className='h-[14rem] w-[10rem] rounded-xl'></img>
                <div className='flex flex-col text-center px-4 items-center'>
                    <div className='pt-4 font-bold'>{file.title}</div>
                    <p className='pt-2 text-[0.8rem]'>{file.description}</p>
                    <p className='pt-5 font-bold text-primary'>להורדה לחצו</p>
                    <a href={file.link} download={file.linkTitle}>
                        <img src={download} className='w-[2rem] mt-2 hover:border-primary border-[2px] rounded-[20rem]'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
