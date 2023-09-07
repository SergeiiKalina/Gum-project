import { useSelector } from 'react-redux'
import style from './formGenTrainStep.module.scss'

export default function HomeTestForm({ register, nextStep }) {
    const sex = useSelector((state) => state.training.sexTraining)

    return (
        <div className={style.wrapper}>
            <section>
                <h2>Number Of Repetitions</h2>

                <div className={style.selectContainer}>
                    <label htmlFor="squatQuantity">Squat Quantity:</label>
                    <select
                        id="squatQuantity"
                        name="squatQuantity"
                        {...register('squatQuantity')}
                    >
                        <option value="1">
                            {sex === 'male' ? '> 30' : '> 20'}
                        </option>
                        <option value="2">
                            {sex === 'male' ? '50 - 100' : '20 - 50'}
                        </option>
                        <option value="3">
                            {sex === 'male' ? `100 <` : '50 <'}
                        </option>
                    </select>
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="pushUpQuantity">Push-Up Quantity:</label>
                    <select
                        id="pushUpQuantity"
                        name="pushUpQuantity"
                        {...register('pushUpQuantity')}
                    >
                        <option value="1">
                            {sex === 'male' ? '> 15' : '> 10'}
                        </option>
                        <option value="2">
                            {sex === 'male' ? '15 - 40' : '10 - 25'}
                        </option>
                        <option value="3">
                            {sex === 'male' ? `50 <` : '30 <'}
                        </option>
                    </select>
                </div>

                <div className={style.selectContainer}>
                    <label htmlFor="sitUp">Sit-Up Quantity:</label>
                    <select id="sitUp" name="sitUp" {...register('sitUp')}>
                        <option value="1">
                            {sex === 'male' ? '> 20' : '> 10'}
                        </option>
                        <option value="2">
                            {sex === 'male' ? '20 - 40' : '10 - 25'}
                        </option>
                        <option value="3">
                            {sex === 'male' ? `50 <` : '30 <'}
                        </option>
                    </select>
                </div>
                <button onClick={(e) => nextStep(e)}>
                    Availability Of Inventory
                </button>
            </section>
        </div>
    )
}
