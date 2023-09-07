import { useDispatch, useSelector } from 'react-redux'
import { writePlaceTraining } from '../store/generatorTrainingReduser'
import style from './formGenTrainStep.module.scss'

export default function FormGenTrainStepFourth({ register, nextStep }) {
    const dispatch = useDispatch()

    return (
        <div className={style.wrapper}>
            <section>
                <h2>Fourth Step</h2>

                <h3>Place Of Training</h3>
                <article className={style.inlineRadio}>
                    <label className={style.radio}>
                        <input
                            onClick={() => dispatch(writePlaceTraining('home'))}
                            type="radio"
                            name="placeOfTraining"
                            value="home"
                            {...register('placeOfTraining')}
                        />
                        Home
                    </label>

                    <label className={style.radio}>
                        <input
                            onClick={() => dispatch(writePlaceTraining('gym'))}
                            type="radio"
                            name="placeOfTraining"
                            value="gym"
                            {...register('placeOfTraining')}
                        />
                        Gym
                    </label>
                </article>

                <button
                    onClick={(e) => {
                        nextStep(e)
                    }}
                >
                    Fourth Step
                </button>
            </section>
        </div>
    )
}
