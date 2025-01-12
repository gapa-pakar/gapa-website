
import React from 'react'
import Slider from 'react-slick'

const testimonialData = [
    {
        id: 1,
        name: "Someone1",
        text: "amazing asdjkahsdfhlksdfjdsfkjdfhhdkhjgfdhk asdjkahsdfhl ksdfjdsfkjdfh hdkhjgf dhkasdjkah sdfhlks dfjdsfkjdf  hhdkhjgfdhkasdjk ahsdfhlksdfjdsfkjdfhhdkhjgfdhk",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Someone2",
        text: "amazing asdjkahsdfhlksdfjdsf asdjkahsdfhlksdfjdsfkjdfhhdkhjgfdhk asdjkahsdfhlk sdfjdsfk jdfhhd khjgfdhkas djkahsdfhlksdfjdsfk jdfhhdkhjgfdhk",
        img: "https://picsum.photos/102/102" 
    },
    {
        id: 3,
        name: "Someone3",
        text: "amazing asdjkah sdfhl  ksdfjdsf asdj kahsdfhlks  dfjdsfkjdfhh dkhjgfdhkas djkah sdfhlksdfj dsfkjdfhh dkhjgfdhkas djkahsdfhlksd fjdsfkjdfh hdkhjgfdhk",
        img: "https://picsum.photos/103/103"
    }
]

export default function Testimonials() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='py-10 dark:text-white'>
                <div data-aos="fade-up" className='container'>
                    {/* Testimonial Section */}
                    <div className='grid grid-cols-1 max-w-screen-xl md:auto gap-6'>
                        <Slider {...settings}>
                            {
                                testimonialData.map(({ id, name, text, img }) => {
                                    return (
                                        <div key={id} className='my-6'>
                                            <div className='flex flex-col sm:flex-row
                                            gap-5 md:gap-14 p-4 mx-5 rounded-xl 
                                            dark:bg-gray-800 relative'>
                                                <img src={img} alt='' className='block mx-auto h-[300px] w-full
                                                sm:w-[200px] object-cover'/>
                                                <div className='space-y-4'>
                                                    <p className='text-gray-500 text-black/80 
                                                dark:text-white/80 x:pr-40'>{text}</p>
                                                    <h1 className='text-xl font-bold'>{name}</h1>
                                                </div>
                                                <p className='text-black/10 text-[12rem]
                                                font-serif absolute bottom-0 right-0'>,,</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
