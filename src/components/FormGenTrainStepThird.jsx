import { useSelector } from "react-redux"
import style from "./formGenTrainStep.module.scss"

export default function FormGenTrainStepThird({ register, nextStep }) {
    const step = useSelector((state) => state.training.step)
    return (
        <div className={style.wrapper}>
            <section>
                <h2>Third Step</h2>
                <div className={style.selectBlock}>
                    <label htmlFor="lifestyle">
                        Select your lifestyle<span>↓</span>
                    </label>
                    <select id="lifestyle" {...register("lifestyle")}>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="passive">Passive</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className={style.selectBlock}>
                    <label htmlFor="goal">
                        Select your goal<span>↓</span>
                    </label>
                    <select id="goal" {...register("goal")}>
                        <option value="goal">Goal</option>
                        <option value="weightMaintenance">
                            Weight Maintenance
                        </option>
                        <option value="weightGain">Weight Gain</option>
                        <option value="weightLoss">Weight Loss</option>
                    </select>
                </div>
                <div className={style.selectBlock}>
                    <label htmlFor="problems">
                        Select any health problems<span>↓</span>
                    </label>
                    <select id="problems" {...register("problems")} multiple>
                        <option value="">
                            Problems with the musculoskeletal system
                        </option>
                        <option value="back">Back</option>
                        <option value="elbows">Elbows</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="knees">Knees</option>
                        <option value="hip joint">Hip Joint</option>
                    </select>
                </div>

                <div className={style.selectBlock}>
                    <label htmlFor="focus">Training Focus</label>
                    <select id="focus" {...register("focus")}>
                        <option value="focus">Focus</option>
                        <option value="fullBody">Full Body</option>
                        <option value="upperBody">Upper Body</option>
                        <option value="lowerBody">Lower Body</option>
                        <option value="legs">Legs</option>
                        <option value="back">Back</option>
                        <option value="chest">Chest Muscle</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="hand">Hand</option>
                        <option value="press">Press</option>
                    </select>
                </div>

                <button type="submit">Fourth Step</button>
            </section>
        </div>
    )
}
