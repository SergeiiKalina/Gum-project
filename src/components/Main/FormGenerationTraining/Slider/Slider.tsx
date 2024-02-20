import React from "react"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Button } from "@mui/material"
import { v4 as uuidv4 } from "uuid"
import { useDispatch } from "react-redux"
import { writeCurrentTraining } from "../../../../store/generatorTrainingReducer"
import EffectCoverflow from "./effect-coverflow/effect-coverflow.mjs"
import Pagination from "./pagination/pagination.mjs"
import "swiper/scss/pagination"
import "swiper/scss/effect-coverflow"

function Slider() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const items = [
        <Button
            variant="contained"
            className="place_training__button home"
            onClick={() => navigate("/gentraining/step-2/home")}
        >
            <span>Home Training</span>
        </Button>,
        <Button
            variant="contained"
            className="place_training__button gym"
            onClick={() => navigate("/gentraining/step-2/gym")}
        >
            <span>Gym Training</span>
        </Button>,
        <Button
            variant="contained"
            className="place_training__button customTraining"
            onClick={() => {
                navigate("/plan-training")
                dispatch(writeCurrentTraining([]))
            }}
        >
            <span>Custom Training</span>
        </Button>,
        <Button
            variant="contained"
            className="place_training__button library"
            onClick={() => navigate("/library")}
        >
            <span>Exercise Library</span>
        </Button>,
    ]
    return (
        <div className="carousel_wrapper">
            <Swiper
                modules={[EffectCoverflow, Pagination]}
                spaceBetween={12}
                slidesPerView={1.12}
                pagination={{ clickable: true }}
                navigation
                scrollbar={{ draggable: true }}
                effect="coverflow"
            >
                {items.map((el) => (
                    <SwiperSlide key={uuidv4()}>{el}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
