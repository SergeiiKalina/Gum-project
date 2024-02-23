import React, { useRef, useState } from "react"
import "./carousel.scss"

const arr = [1, 2, 3, 4, 5]

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
            if (currentIndex === 4) return
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

    return (
        <section className="carousel_wrapper_main">
            <article className="carousel_container" ref={containerRef}>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    className="carousel_item active"
                    ref={firstItemRef}
                >
                    1
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    className="carousel_item"
                >
                    2
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    className="carousel_item"
                >
                    3
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    className="carousel_item"
                >
                    4
                </div>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e)}
                    className="carousel_item"
                >
                    5
                </div>
            </article>
        </section>
    )
}

export default Carousel
