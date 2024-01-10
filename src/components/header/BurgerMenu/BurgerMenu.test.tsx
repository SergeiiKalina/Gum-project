import React from "react"
import { render, screen } from "@testing-library/react"
import BurgerMenu from "./BurgerMenu"

test("renders correctly", () => {
    render(<BurgerMenu showBurgerMenu={() => false} />)
    const linkElement = screen.getAllByText(/good idea/i)
    expect(linkElement).toBeInTheDocument()
})
