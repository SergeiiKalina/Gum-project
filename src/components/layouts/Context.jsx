import { useState, createContext } from 'react'

export const dataFormExercise = createContext()

function Context(props) {
    const [data, setData] = useState({})

    const onWriteData = (data) => {
        setData(data)
    }

    const value = {
        onWriteData,
    }

    return (
        <dataFormExercise.Provider value={value}>
            {props.children}
        </dataFormExercise.Provider>
    )
}

export default Context
