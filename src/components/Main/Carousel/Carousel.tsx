import React, { useRef, useState } from "react"
import "./carousel.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"

function Carousel() {
    const [startTouch, setStartTouch] = useState<number>(0)
    const firstItemRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
        setStartTouch(e.changedTouches[0].clientX)
    }

    function handleTouchEnd(e: React.TouchEvent<HTMLElement>) {
        if (
            startTouch + 10 > e.changedTouches[0].clientX &&
            containerRef.current &&
            firstItemRef.current
        ) {
            console.log(firstItemRef)
            if (currentIndex === 3) return
            setCurrentIndex((prev) => prev + 1)
            const children = Array.from(
                containerRef.current.children
            ) as HTMLElement[]
            containerRef.current.scrollBy({
                left: Number(firstItemRef.current.offsetWidth) + 16,
                behavior: "smooth",
            })
            if (children.length >= currentIndex) {
                for (let element of children) {
                    element.classList.remove("active")
                }

                let currentChild = children[currentIndex + 1] as HTMLElement

                currentChild.classList.add("active")
            }
        }
        if (
            startTouch + 10 < e.changedTouches[0].clientX &&
            containerRef.current &&
            firstItemRef.current
        ) {
            if (currentIndex === 0) return
            setCurrentIndex((prev) => prev - 1)
            const children = Array.from(
                containerRef.current.children
            ) as HTMLElement[]

            containerRef.current.scrollBy({
                left: -Number(firstItemRef.current.offsetWidth) - 16,
                behavior: "smooth",
            })
            if (children.length > currentIndex) {
                for (let element of children) {
                    element.classList.remove("active")
                }
                let currentChild = children[currentIndex - 1] as HTMLElement

                currentChild.classList.add("active")
            }
        }
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <section className="carousel_wrapper_main">
            <article className="carousel_container" ref={containerRef}>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/gentraining/step-2/home")}
                    className="carousel_item home"
                    ref={firstItemRef}
                >
                    <span>Home Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/gentraining/step-2/gym")}
                    className="carousel_item gym"
                >
                    <span>Gym Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => {
                        navigate("/plan-training")
                        dispatch(writeCurrentTraining([]))
                    }}
                    className="carousel_item customTraining"
                >
                    <span>Custom Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/library")}
                    className="carousel_item library"
                >
                    <span>Library</span>
                </div>
            </article>
        </section>
    )
}

export default Carousel
