import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper"
import SlideForSlider from "./SlideForSlider"
import React from "react"
import "swiper/swiper.min.css"
import "./../../node_modules/swiper/modules/pagination/pagination.min.css"

SwiperCore.use([Pagination])

function AboutMe(): React.JSX.Element {
    return (
        <Swiper
            style={{ borderRadius: "20px" }}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <SlideForSlider />
            </SwiperSlide>
            <SwiperSlide>
                <SlideForSlider />
            </SwiperSlide>
            <SwiperSlide>
                <SlideForSlider />
            </SwiperSlide>
            <SwiperSlide>
                <SlideForSlider />
            </SwiperSlide>
        </Swiper>
    )
}
export default AboutMe
