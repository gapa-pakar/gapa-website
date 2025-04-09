
import React, { lazy } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MenuLinks } from './Navbar'
import { Link } from 'react-router-dom'

const HomePage = lazy(() => import('../HomePage'));
const AboutPage = lazy(() => import('../About'));
const ProjectsPage = lazy(() => import('../Projects'));
const ContactPage = lazy(() => import('../Contact'));

export default function ResponsiveMenu(props) {
    const { showMenu } = props

    return (
        <div className={`${showMenu ? "right-0" : "right-[-100%]"} 
        fixed bottom-0 top-0 w-[75%] transition-all 
        duration-300 shadow-md pt-16 px-8 bg-white dark:bg-gray-900 z-50 
        flex flex-col justify-between pb-5`}>
            <div className="card">
                {/* User Section */}
                <div className='flex items-center justify-start gap-3'>
                    <FaUserCircle size={50} />
                    <div>
                        <h1>שלום,</h1>
                        <h1 className='text-sm text-slate-500'>איך נוכל לעזור?</h1>
                    </div>
                </div>
                {/* Menu Section */}
                <nav className='mt-10'>
                    <ul className='space-y-1 text-lg font-extrabold'>
                        {
                            MenuLinks.map(({ id, name, link, loading }) => {
                                return (
                                    <li key={id}>
                                        <Link
                                            to={link}
                                            className={id !== 4 ? 'mb-5 inline-block' : 'btn-primary'}
                                            onPointerEnter={loading.preload}
                                        >
                                            {" "}
                                            {name}
                                        </Link>
                                    </li>)
                            })
                        }
                        {/* <button className='btn-primary'><Link to='/contact'>צרו קשר</Link></button> */}
                    </ul>
                </nav>
            </div>
            {/* Footer Section */}
            <div>
                <h1>Made with ❤ by{" "}
                    <a href=''>Gapa</a>{" "}
                </h1>
            </div>
        </div>
    )
}
