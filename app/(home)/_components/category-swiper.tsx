"use client"

import React from 'react'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import "./style.swiper.css"

export const CategorySwiper = () => {
    return (
        <Swiper
            slidesPerView={2}
            autoplay={false}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: -300
                },
            }}
            className="h-[18vh] bg-secondary"
        >
            <SwiperSlide>
                <Image
                    src="/category_img_1.png"
                    alt='category swiper image'
                    height={120}
                    width={100}
                    objectFit='contain'
                    priority
                    className='grayscale brightness-0 transition-all hover:brightness-90'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/category_img_2.png"
                    alt='category swiper image'
                    height={120}
                    width={100}
                    objectFit='contain'
                    priority
                    className='grayscale brightness-0 transition-all hover:brightness-90'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/category_img_3.png"
                    alt='category swiper image'
                    height={120}
                    width={100}
                    objectFit='contain'
                    priority
                    className='grayscale brightness-0 transition-all hover:brightness-90'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/category_img_4.png"
                    alt='category swiper image'
                    height={120}
                    width={100}
                    objectFit='contain'
                    priority
                    className='grayscale brightness-0 transition-all hover:brightness-90'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/category_img_5.png"
                    alt='category swiper image'
                    height={120}
                    width={100}
                    objectFit='contain'
                    priority
                    className='grayscale brightness-0 transition-all hover:brightness-90'
                />
            </SwiperSlide>
        </Swiper>
    )
}