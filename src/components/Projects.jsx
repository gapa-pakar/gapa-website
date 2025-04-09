import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Graphics from './Projects/Graphics'
import Canva from './Projects/Canva'
import Lomdot from './Projects/Lomdot'
import DownloadFiles from './Projects/DownloadFiles'
import Footer from './Footer/Footer'
import Loading from './Loading'

export default function Projects() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
    if (localStorage.pageSection) {
      location.hash = JSON.parse(localStorage.getItem('pageSection'));
      localStorage.removeItem('pageSection');
    }

  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className='dark:bg-black'>
      <Navbar />
      <section id='graphics'>
        <Graphics />
      </section>
      {/* <hr className='w-[100%] border-black border-[1px]'></hr> */}
      <section id='canva'>
        <Canva />
      </section>
      {/* <hr className='w-[100%] border-black border-[1px]'></hr> */}
      <section id='lomdot'>
        <Lomdot />
      </section>
      <section>
        <DownloadFiles />
      </section>
      <Footer />
    </div>
  )
}


