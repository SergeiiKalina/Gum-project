import { useDispatch } from 'react-redux'
import { writeSexTraining } from '../store/generatorTrainingReduser'
import style from './formGenTrainStep.module.scss'

export default function FormGenTrainStepOne({ register, nextStep }) {
    const dispatch = useDispatch()

    return (
        <div className={style.wrapper}>
            <section>
                <h2>First Step</h2>
                <input
                    type="text"
                    placeholder="First Name..."
                    name="firstName"
                    {...register('firstName')}
                />

                <input
                    type="text"
                    placeholder="Last Name..."
                    name="lastName"
                    {...register('lastName')}
                />

                <input
                    type="text"
                    placeholder="Email..."
                    name="email"
                    {...register('email')}
                />
                <input
                    type="number"
                    placeholder="Kg..."
                    name="weight"
                    {...register('weight')}
                />
                <select {...register('age')}>
                    <option value="Age">Age</option>
                    <option value="1">{`> 18`}</option>
                    <option value="1">18 - 24</option>
                    <option value="1.1">25 - 34</option>
                    <option value="1.2">35 - 44</option>
                    <option value="1.3">45 - 54</option>
                    <option value="1.4">{`55 <`}</option>
                </select>
                <article className={style.inlineRadio}>
                    <label
                        className={style.radio}
                        onClick={() => dispatch(writeSexTraining('male'))}
                    >
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            {...register('sex')}
                        />
                        Male
                    </label>

                    <label
                        className={style.radio}
                        onClick={() => dispatch(writeSexTraining('female'))}
                    >
                        <input
                            type="radio"
                            name="sex"
                            value="female"
                            {...register('sex')}
                        />
                        Female
                    </label>
                </article>

                <button onClick={(e) => nextStep(e)}>Second Step</button>
            </section>
        </div>
    )
}
