
import React, { lazy, useState } from 'react'
import Logo from "../../assets/logo.png"
import DarkMode from './DarkMode'
import ResponsiveMenu from './ResponsiveMenu'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const HomePage = lazy(() => import('../HomePage'));
const AboutPage = lazy(() => import('../About'));
const ProjectsPage = lazy(() => import('../Projects'));
const ContactPage = lazy(() => import('../Contact'));

export const MenuLinks = [
    {
        id: 1,
        name: "בית",
        link: "/",
        loading: HomePage
    },
    {
        id: 2,
        name: "מי אנחנו?",
        link: "/about",
        loading: AboutPage
    },
    {
        id: 3,
        name: "תוצרי הדרכה",
        link: "/projects",
        loading: ProjectsPage
    },
    {
        id: 4,
        name: "צרו קשר",
        link: "/contact",
        loading: ContactPage
    }
]

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <nav className='bg-white dark:bg-black dark:text-white 
            duration-300'>
                <div className='container py-3 md:py-2'>
                    <div className='flex justify-between items-center'>
                        {/* Logo Section */}
                        <div>
                            <Link to='/' className='flex items-center gap-3'>
                                <img src={Logo} alt='Logo' className='w-5' />
                                <span className='text-0.7xl sm:text-1.7xl font-bold'>גפ"ה חטיבת החילוץ וההדרכה</span></Link>
                        </div>
                        {/* Desktop NavLinks Section */}
                        <div className='hidden md:block'>
                            <ul className='flex items-center gap-5'>
                                {
                                    MenuLinks.map(({ id, name, link, loading }) => {
                                        return (
                                            <li key={id} className='cursor-pointer py-4'>
                                                <Link
                                                    to={link}
                                                    className={id !== 4 ? 'text-l font-bold hover:text-primary py-2 hover:border-b-2 hover:border-primary' : 'btn-primary'}
                                                    onMouseEnter={loading.preload}
                                                >
                                                    {name}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                                <DarkMode></DarkMode>
                            </ul>
                        </div>

                        {/* Mobile View */}
                        <div className='flex items-center gap-4 md:hidden'>
                            <DarkMode />
                            {showMenu ? (
                                <HiMenuAlt1 onClick={toggleMenu}
                                    className='cursor-pointer text-2xl'
                                />
                            ) : (
                                <HiMenuAlt3 onClick={toggleMenu}
                                    className='cursor-pointer text-2xl'
                                />
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Mobile Menu Section */}
                <ResponsiveMenu showMenu={showMenu} />
            </nav>
        </>
    )
}
