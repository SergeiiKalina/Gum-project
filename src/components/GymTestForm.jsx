import { useSelector } from "react-redux"
import style from "./formGenTrainStep.module.scss"

export default function GymTestForm({ register, nextStep }) {
    const sex = useSelector((state) => state.training.sexTraining)

    return (
        <div className={style.wrapper}>
            <section>
                <h2>Weight ~ 1PM</h2>
                <div className={style.selectContainer}>
                    <label htmlFor="squatWeight">Squat Weight:</label>
                    <input
                        type="number"
                        id="squatWeight"
                        name="squatWeight"
                        {...register("squatWeight")}
                    />
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="benchPressWeight">
                        Bench Press Weight:
                    </label>
                    <input
                        type="number"
                        id="benchPressWeight"
                        name="benchPressWeight"
                        {...register("benchPressWeight")}
                    />
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="deadLiftWeight">Dead Lift Weight:</label>
                    <input
                        type="number"
                        id="deadLiftWeight"
                        name="deadLiftWeight"
                        {...register("deadLiftWeight")}
                    />
                </div>
                <h2 className={style.secondHeader}>Number Of Repetitions</h2>
                <div className={style.selectContainer}>
                    <label htmlFor="pullUp">Pull-up:</label>
                    <input
                        type="number"
                        id="pullUp"
                        name="pullUp"
                        {...register("pullUp")}
                    />
                </div>
                <div className={style.selectContainer}>
                    <label htmlFor="pushUpQuantity">Push-up:</label>
                    <input
                        type="number"
                        id="pushUpQuantity"
                        name="pushUpQuantity"
                        {...register("pushUpQuantity")}
                    />
                </div>
                <div className={style.selectContainer}>
                    <label htmlFor="sitUp">Sit-up:</label>
                    <input
                        type="number"
                        id="sitUp"
                        name="sitUp"
                        {...register("sitUp")}
                    />
                </div>

                <button onClick={(e) => nextStep(e)}>
                    Availability Of Inventory
                </button>
            </section>
        </div>
    )
}
