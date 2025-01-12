import React, {useEffect, useState} from 'react'
import HomePage from './components/HomePage';
import ErrorComponent from './components/ErrorComponent';
import About from './components/About';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createBrowserRouter([{ path: '/', element: <HomePage />, errorElement: <ErrorComponent /> },
{ path: '/about', element: <About />, errorElement: <ErrorComponent /> }
])

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  

  return (<RouterProvider router={router} />)
}

export default App
