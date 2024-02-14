import React, { ReactNode, useRef, useState } from "react"
import "./mobileMenuFroExerciseWrapper.scss"

function MobileMenuFroExerciseWrapper({
    toggleClass,
    setToggleMobileFilterForm,
    children,
}: {
    toggleClass: boolean
    setToggleMobileFilterForm: (arg: boolean) => void
    children: ReactNode
}) {
    const touchYStart = useRef<number>(0)
    const [deltaY, setDeltaY] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)

    const handleTouchStart = (e: React.TouchEvent<HTMLSpanElement>) => {
        touchYStart.current = e.touches[0].clientY
        setIsDragging(true)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLSpanElement>) => {
        if (!isDragging) return
        const touchYEnd = e.touches[0].clientY
        const newDeltaY = touchYEnd - touchYStart.current

        if (newDeltaY > 0) {
            setDeltaY(newDeltaY)
        } else {
            setDeltaY(0)
        }
    }

    const handleTouchEnd = () => {
        if (deltaY > 50) {
            setToggleMobileFilterForm(false)
            document.body.style.overflow = ""
        }
        setIsDragging(false)
        setDeltaY(0)
    }

    return (
        <section
            className={`mobile_filter_wrapper ${toggleClass ? "show" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                transform: toggleClass
                    ? `translateY( ${deltaY}px)`
                    : `translateY(calc(100dvh))`,
            }}
        >
            <span className="border_logic_block"></span>

            {children}
        </section>
    )
}

export default MobileMenuFroExerciseWrapper
