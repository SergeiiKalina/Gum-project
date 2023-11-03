import React, { useState, createContext, ReactNode, JSX } from "react"

export interface iDateForm {
    title: string
    id: string
    video?: string
    image: string
    category: string
    fitnessLevel: string
    LFC: boolean
    sex: string
    basicExercise: boolean
}

interface DataFormExerciseContextProps {
    changeRadio: (e: string) => void
    bul: string
}

export const DataFormExerciseContext = createContext<
    DataFormExerciseContextProps | undefined
>(undefined)

interface ContextProps {
    children: ReactNode
}

function Context({ children }: ContextProps): JSX.Element {
    const [bul, setBul] = useState("")

    const changeRadio = (e: string) => {
        setBul(e)
    }

    const value: DataFormExerciseContextProps = {
        changeRadio,
        bul,
    }

    return (
        <DataFormExerciseContext.Provider value={value}>
            {children}
        </DataFormExerciseContext.Provider>
    )
}

export default Context
