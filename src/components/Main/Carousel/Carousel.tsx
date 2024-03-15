import React, { useEffect, useRef, useState } from "react"
import "./carousel.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { writeCurrentTraining } from "../../../store/generatorTrainingReducer"
import { useSelector } from "react-redux"
import { IAuthSliceState } from "../../header/Login/Login"

function Carousel() {
    const [startTouch, setStartTouch] = useState<number>(0)
    const firstItemRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [startTouchTime, setStartTouchTime] = useState<number>(0)
    const isAuth = useSelector(
        (state: IAuthSliceState) => state.authSlice.isAuth
    )
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth, navigate])

    useEffect(() => {
        const currentContainerRef = containerRef.current
        const handleScroll = () => {
            if (currentContainerRef && firstItemRef.current) {
                const scrollLeft = currentContainerRef.scrollLeft
                const offsetWidth = firstItemRef.current.offsetWidth
                const index = Math.round(scrollLeft / offsetWidth)
                setCurrentIndex(index)
            }
        }

        if (currentContainerRef) {
            currentContainerRef.addEventListener("scroll", handleScroll)
        }

        return () => {
            if (currentContainerRef) {
                currentContainerRef.removeEventListener("scroll", handleScroll)
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
            const scrollAmount =
                containerRef.current!.offsetWidth -
                (containerRef.current!.offsetWidth / 100) * 10
            if (Math.abs(diffX) >= threshold) {
                const numBlocksToScroll =
                    velocity > 1.5 ? 3 : velocity > 1 ? 2 : 1

                const scrollDirection = diffX > 0 ? -1 : 1
                const countScroll =
                    scrollDirection * scrollAmount * numBlocksToScroll

                smoothScroll(
                    containerRef.current!.scrollLeft,
                    containerRef.current!.scrollLeft + countScroll,
                    numBlocksToScroll === 3
                        ? 300
                        : numBlocksToScroll === 2
                        ? 200
                        : 150
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

    return (
        <section className="carousel_wrapper_main">
            <h2>
                Hello,
                <span>
                    {localStorage.getItem("googleName") ||
                        localStorage.getItem("name")}
                </span>
            </h2>
            <h2>{Date().substring(0, 15)}</h2>
            <article className="carousel_container" ref={containerRef}>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/main-page/step-2/home")}
                    className={`carousel_item home ${
                        currentIndex === 0
                            ? "active"
                            : currentIndex === 1
                            ? "prev"
                            : ""
                    }`}
                    ref={firstItemRef}
                >
                    <span>Home Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/main-page/step-2/gym")}
                    className={`carousel_item gym ${
                        currentIndex === 1
                            ? "active"
                            : currentIndex === 2
                            ? "prev"
                            : ""
                    }`}
                >
                    <span>Gym Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => {
                        navigate("/main-page/plan-training")
                        dispatch(writeCurrentTraining([]))
                    }}
                    className={`carousel_item customTraining ${
                        currentIndex === 2
                            ? "active"
                            : currentIndex === 3
                            ? "prev"
                            : ""
                    }`}
                >
                    <span>Custom Training</span>
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    onClick={() => navigate("/main-page/library")}
                    className={`carousel_item library ${
                        currentIndex === 3 ? "active" : ""
                    }`}
                    style={{ marginRight: "30px" }}
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
