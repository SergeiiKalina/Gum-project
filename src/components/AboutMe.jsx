import img from '../image/IMG-39ecee3d968d544e854d0d857e831f16-V-removebg-preview.png'
import style from './aboutme.module.css'

function AboutMe() {
    return (
        <div className={style.block}>
            <div>
                <img src={img} />
            </div>
            <div className={style.block_paragraph}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita repellendus, necessitatibus maxime sed molestias a
                    vero accusamus. Similique, officia. Quaerat facilis vel
                    architecto assumenda, tenetur et laborum molestias
                    distinctio facere!
                </p>
            </div>
        </div>
    )
}
export default AboutMe
