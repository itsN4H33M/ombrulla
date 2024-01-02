import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from './carouselData'


function CustomerCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='w-full mx-auto'>
                <Slider {...settings}>
                    {
                        reviews.map((item) => (
                            <div className='w-full h-96 px-4'>
                                <div className='bg-slate-50 rounded-t-lg h-3/4'>
                                    <i className="fa-solid fa-quote-left fa-2xl px-5 py-10" style={{ color: "#3252b1" }}></i>
                                    <p className='text-gray-500 mx-10'>{item.review}</p>
                                </div>
                                <div className='bg-slate-300 h-1/4 flex justify-start items-center'>
                                    <img className='h-20 w-20 rounded-full ml-5 border-2 border-white' src={item.logo} alt="" />
                                    <div className='ml-4'>
                                        <p>{item.name}</p>
                                        <p className='text-blue-400'>{item.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Slider>
            </div>
        </>
    )
}

export default CustomerCarousel