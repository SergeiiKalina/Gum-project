import AddIcon from "@mui/icons-material/Add"
import training, { ITraining } from "../../../../data/data"
import { useEffect } from "react"
import { IExerciseData } from "../AddExercise"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { writeCurrentTraining } from "../../../../store/generatorTrainingReducer"

function ExerciseCard({ exercise }: { exercise: ITraining }) {
    const dispatch = useDispatch()
    const planTrainingArr: ITraining[] = useSelector(
        (state: IExerciseData) => state.training.arr
    )
    function addExercise(id: number) {
        let element: ITraining = training.filter(
            (el) => Number(el.id) === Number(id)
        )[0]

        let elementId: number = element.id
        const clonedValue: ITraining[] = structuredClone(planTrainingArr)
        let check: boolean = clonedValue.some(
            (el: ITraining) => el.id === elementId
        )

        if (check) {
            alert("This exercise already exists.")
            return
        } else {
            clonedValue.push(element)
            if (clonedValue.length === 13) {
                alert("Max exercise 12")
                return
            }
            dispatch(writeCurrentTraining(clonedValue))
            alert("You add exercise")
        }
    }

    useEffect(() => {
        if (planTrainingArr.length >= 7) {
            const wrapper = document.querySelector(
                ".custom_training_wrapper"
            ) as HTMLElement
            if (wrapper) {
                wrapper.style.paddingBottom = "50px"
            }
        }
    }, [])
    return (
        <li className="add_exercise_item_block">
            <article className="add_exercise_item_block_left_part">
                <img
                    src={exercise.img}
                    className="add_exercise_item_block_img"
                    alt={exercise.title}
                />
                <div className="add_exercise_item_block_left_part_info">
                    <span className="add_exercise_item_block_left_part_title">
                        {exercise.title}
                    </span>
                    <div className="add_exercise_item_block_chips">
                        <span className="add_exercise_item_chips">
                            {exercise.category}
                        </span>
                    </div>
                </div>
            </article>
            <article className="add_exercise_item_block_right_part">
                <button
                    type="button"
                    onTouchStart={() => addExercise(exercise.id)}
                    onClick={() => addExercise(exercise.id)}
                >
                    <AddIcon />
                </button>
            </article>
        </li>
    )
}

export default ExerciseCard
