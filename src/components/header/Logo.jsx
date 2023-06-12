import img from '../../image/android-chrome-192x192.png'
import style from './logo.module.css'

function Logo() {
    return (
        <div>
            <img src={img} alt="img" className={style.img} />
        </div>
    )
}

export default Logo
