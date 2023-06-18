import img from '../image/IMG-39ecee3d968d544e854d0d857e831f16-V-removebg-preview.png'
import style from './aboutme.module.css'
import stylescss from './aboutme.module.scss'

function AboutMe() {
    return (
        <div className={style.block}>
            <div className={style.blockImg}>
                <img src={img} className={style.mainFoto} />
            </div>
            <div className={style.block_paragraph}>
                <p className={stylescss.paragraphe}>
                    <span>Lorem</span>, ipsum dolor sit amet consectetur
                    adipisicing elit. Expedita repellendus, necessitatibus
                    maxime sed molestias a vero accusamus.
                </p>
            </div>
        </div>
    )
}
export default AboutMe
