
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Features",
        link: "/features"
    },
    {
        title: "Works",
        link: "/works"
    },
    {
        title: "Career",
        link: "/career"
    }
];

const HelpLinks = [
    {
        title: "Customer Support",
        link: "/support"
    },
    {
        title: "Delivery Details",
        link: "/delivery-details"
    },
    {
        title: "Terms & Conditions",
        link: "/terms"
    },
    {
        title: "Privacy Policy",
        link: "/policy"
    }
];

const ResourcesLinks = [
    {
        title: "Free Ebooks",
        link: "/ebooks"
    },
    {
        title: "How To Blog",
        link: "/blogs"
    },
    {
        title: "Subscribe TCJ",
        link: "https://www.youtube.com/watch?v=Ngpf6UtPn4k"
    }
]

export default function Footer() {
    return (
        <>
            <div className='bg-black/95 text-white'>
                <div className='container'>
                    <div className='grid md:grid-cols-3 py-5'>
                        {/* Company Details */}
                        {/* <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold 
                                sm:text-left text-justify mb-3 flex items-center 
                                gap-3'>Digital Agency</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam justo, placerat dapibus ligula nec, condimentum laoreet est. Nam bibendum vestibulum neque eu ultricies. Curabitur accumsan accumsan erat, a scelerisque urna. Cras gravida leo magna, ornare iaculis augue dapibus id.{" "}
                            </p>
                            <br /> */}
                            {/* Social Handle */}
                            {/* <div className='flex items-center gap-4 mt-6'>
                                <a href='#'>
                                    <FaInstagram className='text-2xl
                            hover:text-primary duration-300'/>
                                </a>
                                <a href='#'>
                                    <FaFacebook className='text-2xl
                            hover:text-primary duration-300'/>
                                </a>
                                <a href='#'>
                                    <FaLinkedin className='text-2xl
                            hover:text-primary duration-300'/>
                                </a>
                            </div>
                        </div> */}
                        {/* Links Section */}
                        {/* <div className='grid grid-cols-2 sm:grid-cols-3
                        col-span-2 md:pl-10'> */}
                            {/* First Col */}
                            {/* <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Company</h1>
                                    <ul className='space-y-3'>
                                        {FooterLinks.map((link) => {
                                            return (
                                                <li key={link.title}
                                                    className='cursor-pointer
                                                    hover:translate-x-1 duration-300
                                                    hover:text-primary space-x-1
                                                    text-gray-400'>
                                                    <span>{link.title}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div> */}
                            {/* Second Col */}
                            {/* <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Help</h1>
                                    <ul className='space-y-3'>
                                        {HelpLinks.map((link) => {
                                            return (
                                                <li key={link.title}
                                                    className='cursor-pointer
                                                    hover:translate-x-1 duration-300
                                                    hover:text-primary space-x-1
                                                    text-gray-400'>
                                                    <span>{link.title}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div> */}
                            {/* Third Col */}
                            <div>
                                {/* <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Resources</h1>
                                    <ul className='space-y-3'>
                                        {ResourcesLinks.map((link) => {
                                            return (
                                                <li key={link.title}
                                                    className='cursor-pointer
                                                    hover:translate-x-1 duration-300
                                                    hover:text-primary space-x-1
                                                    text-gray-400'>
                                                    <span>{link.title}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
