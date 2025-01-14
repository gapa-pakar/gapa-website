import React from 'react'
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <ReactLoading type="balls" color="#6153CD" className='h-100 w-50' />
        </div>
    )
}
