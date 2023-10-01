"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

import { Pagination, Autoplay } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';
import Image from 'next/legacy/image';

export const Carousel = () => {

    const pagination: PaginationOptions = {
        clickable: true,
        renderBullet(index, className) {
            return `<div class=${className}></div>`
        },
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className="h-[100vh]"
            >
                <SwiperSlide>
                    <Image
                        src="/product-images/S1.jpg"
                        alt='carousel image'
                        layout='fill'
                        objectFit='cover'
                        className='h-screen w-screen'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/product-images/S2.jpg"
                        alt='carousel image'
                        layout='fill'
                        objectFit='cover'
                        className='h-screen w-screen'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/product-images/S3.jpg"
                        alt='carousel image'
                        layout='fill'
                        objectFit='cover'
                        className='h-screen w-screen'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}