import style from "./formGenTrainStep.module.scss"
import training from "../data/data"
import { useEffect, useState } from "react"

export default function AvailabilityOfInventory({ register, nextStep }) {
    const [inventory, setInventory] = useState(null)
    useEffect(() => {
        let set = new Set()
        training.forEach((element) => {
            element.inventory.forEach((el) => set.add(el))
        })
        console.log(set)
    }, [training])

    return (
        <div className={style.wrapper}>
            <section>
                <h2>Availability Of Inventory</h2>
                <article className={style.blockInventory}>
                    <h3 className={style.header}>Choose Inventory</h3>
                    <label>
                        <input
                            type="checkbox"
                            value="dumbbell"
                            {...register("inventory")}
                        />
                        Dumbbell
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="kettlebell"
                            {...register("inventory")}
                        />
                        Kettlebell
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="band"
                            {...register("inventory")}
                        />
                        Band
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="mini-band"
                            {...register("inventory")}
                        />
                        Mini-Band
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="bar"
                            {...register("inventory")}
                        />
                        Bar or Bodybar
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="TRX"
                            {...register("inventory")}
                        />
                        TRX
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="fitball"
                            {...register("inventory")}
                        />
                        Fitball
                    </label>
                </article>
                <button onClick={(e) => nextStep(e)}>Submit</button>
            </section>
        </div>
    )
}
