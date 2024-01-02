import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel({ images }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    return (
        <div className='w-[70%] mx-auto'>
            <Slider {...settings} className='mb-10'>
                {
                    images.map((image, index) => (
                        <div key={index} className='px-8'>
                            <img src={image} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carousel