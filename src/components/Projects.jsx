import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Graphics from './Projects/Graphics'
import Canva from './Projects/Canva'
import Lomdot from './Projects/Lomdot'
import Footer from './Footer/Footer'

export default function Projects() {

  return (
    <div className='dark:bg-black'>
      <Navbar></Navbar>
      <section id='graphics'>
        <Graphics></Graphics>
      </section>
      {/* <hr className='w-[100%] border-black border-[1px]'></hr> */}
      <section id='canva'>
        <Canva></Canva>
      </section>
      {/* <hr className='w-[100%] border-black border-[1px]'></hr> */}
      <section id='lomda'>
        <Lomdot></Lomdot>
      </section>
      <Footer></Footer>
    </div>
  )
}
