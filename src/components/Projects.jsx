import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Graphics from './Projects/Graphics'
import Canva from './Projects/Canva'
import Lomdot from './Projects/Lomdot'
import Footer from './Footer/Footer'
import Loading from './Loading'

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return <Loading />;
  } 

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


