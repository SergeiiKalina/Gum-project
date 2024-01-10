import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SlideForSlider from "./SlideForSlider"

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
