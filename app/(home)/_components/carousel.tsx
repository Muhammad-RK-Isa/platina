"use client"

import React from 'react'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { PaginationOptions } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'

import './style.css'
import { CarouselOverlay } from './carousel-overlay'

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
            spaceBetween={0}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            className="h-[82vh]"
        >
            <SwiperSlide className='relative cursor-grab'>
                <div className='text-secondary z-10 absolute right-24 top-1/2 -translate-y-1/2'>
                    <CarouselOverlay
                        heading='special occasion jewelry'
                        title='New design wedding rings'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto?'
                        url='/'
                        blogUrl='/'
                    />
                </div>
                <Image
                    src="/slider-1L.jpg"
                    alt='carousel image'
                    layout='fill'
                    objectFit='cover'
                />
            </SwiperSlide>
            <SwiperSlide className='relative cursor-grab'>
                <div className='text-secondary z-10 absolute right-24 top-1/2 -translate-y-1/2'>
                    <CarouselOverlay
                        heading='Trendy Design'
                        title='fashionable disigning jewelry'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto?'
                        url='/'
                        blogUrl='/'
                    />
                </div>
                <Image
                    src="/slider-2L.jpg"
                    alt='carousel image'
                    layout='fill'
                    objectFit='cover'
                />
            </SwiperSlide>
            <SwiperSlide className='relative cursor-grab'>
                <div className='text-secondary z-10 absolute left-24 top-1/2 -translate-y-1/2'>
                    <CarouselOverlay
                        heading='Classy Design'
                        title='amazing jewelry collection'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto?'
                        url='/'
                        blogUrl='/'
                    />
                </div>
                <Image
                    src="/slider-3L.jpg"
                    alt='carousel image'
                    layout='fill'
                    objectFit='cover'
                />
            </SwiperSlide>
        </Swiper>
    )
}