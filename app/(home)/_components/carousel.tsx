"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { PaginationOptions } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.css'


export const Carousel = () => {

    const pagination: PaginationOptions = {
        clickable: true,
        renderBullet(index, className) {
            return `<div class=${className}></div>`
        },
    }

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={1}
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
    )
}