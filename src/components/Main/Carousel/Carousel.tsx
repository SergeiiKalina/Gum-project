import React, { useEffect, useRef, useState } from "react"
import "./carousel.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"

function Carousel() {
    const [startTouch, setStartTouch] = useState<number>(0)
    const firstItemRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [startTouchTime, setStartTouchTime] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current && firstItemRef.current) {
                const scrollLeft = containerRef.current.scrollLeft
                const offsetWidth = firstItemRef.current.offsetWidth
                const index = Math.round(scrollLeft / offsetWidth)
                setCurrentIndex(index)
            }
        }

        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll)
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("scroll", handleScroll)
            }
        }
    }, [])

    function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
        setStartTouch(e.changedTouches[0].clientX)
        setStartTouchTime(performance.now())
    }

    function handleTouchEnd(e: React.TouchEvent<HTMLElement>) {
        if (startTouch > 0 && firstItemRef.current) {
            const end = e.changedTouches[0].clientX
            const diffX = end - startTouch
            const diffTime = performance.now() - startTouchTime
            const velocity = Math.abs(diffX / diffTime)

            const threshold = 10
            const scrollAmount = Number(firstItemRef.current.offsetWidth)
            if (Math.abs(diffX) >= threshold) {
                const numBlocksToScroll = Math.ceil(
                    Math.abs(diffX) / containerRef.current!.offsetWidth
                )
                const scrollDirection = diffX > 0 ? -1 : 1

                const countScroll =
                    velocity > 1
                        ? scrollDirection * scrollAmount * numBlocksToScroll
                        : scrollDirection * scrollAmount

                const padding =
                    velocity > 1
                        ? diffX > 0
                            ? -18 * numBlocksToScroll
                            : +18 * numBlocksToScroll
                        : 0

                smoothScroll(
                    containerRef.current!.scrollLeft,
                    containerRef.current!.scrollLeft + countScroll + padding,
                    400
                )
            }
        }
    }

    function smoothScroll(start: number, end: number, duration: number) {
        const startTime = performance.now()
        const endTime = startTime + duration

        function scroll() {
            const now = performance.now()
            const timeFraction = Math.min((now - startTime) / duration, 1)

            const scrollLeft = start + (end - start) * timeFraction
            containerRef.current!.scrollLeft = scrollLeft

            if (now < endTime) {
                requestAnimationFrame(scroll)
            }
        }

        requestAnimationFrame(scroll)
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <section className="carousel_wrapper_main">
            <h2>Hello, {localStorage.getItem("name")}</h2>
            <h2>{Date().substring(0, 15)}</h2>
            <article className="carousel_container" ref={containerRef}>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/gentraining/step-2/home")}
                    className={`carousel_item home ${
                        currentIndex === 0 ? "active" : ""
                    }`}
                    ref={firstItemRef}
                >
                    <span>Home Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/gentraining/step-2/gym")}
                    className={`carousel_item gym ${
                        currentIndex === 1 ? "active" : ""
                    }`}
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
                    className={`carousel_item customTraining ${
                        currentIndex === 2 ? "active" : ""
                    }`}
                >
                    <span>Custom Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/library")}
                    className={`carousel_item library ${
                        currentIndex === 3 ? "active" : ""
                    }`}
                >
                    <span>Library</span>
                </div>
            </article>
            <section className="bullet">
                <span
                    className={`bullet_point ${
                        currentIndex === 0 ? "active" : ""
                    }`}
                ></span>
                <span
                    className={`bullet_point ${
                        currentIndex === 1 ? "active" : ""
                    }`}
                ></span>
                <span
                    className={`bullet_point ${
                        currentIndex === 2 ? "active" : ""
                    }`}
                ></span>
                <span
                    className={`bullet_point ${
                        currentIndex === 3 ? "active" : ""
                    }`}
                ></span>
            </section>
        </section>
    )
}

export default Carousel
