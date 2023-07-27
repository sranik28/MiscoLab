"use client"

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../public/agency-slider02-100x50.jpg"

const Banner = () => {
    return (
        <section className="text-center">
            <Carousel centerMode={true}>
                <div className="w-full h-[70vh]">
                    <Image fill={true} src={banner} alt='' />
                </div>
                <div className="w-full">
                    <Image fill={true} src={banner} alt='' />
                </div>
                <div className="w-full">
                    <Image src={banner} alt='' />
                </div>
                <div className="w-full">
                    <Image src={banner} alt='' />
                </div>
                <div className="w-full">
                    <Image src={banner} alt='' />
                </div>
                <div className="w-full">
                    <Image src={banner} alt='' />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;