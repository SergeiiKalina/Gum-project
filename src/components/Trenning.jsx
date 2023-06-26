import trening from '../data/data'
import styles from './training.module.css'
function Trening() {
    return (
        <div className={styles.blockTrening}>
            {trening.map((tr) => {
                const { id, img, title } = tr
                return tr.video ? (
                    <div key={id} className={styles.trainingItem}>
                        <iframe
                            width="100%"
                            height="88%"
                            src="https://www.youtube.com/embed/1ZXobu7JvvE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <p>{title}</p>
                    </div>
                ) : (
                    <div key={id} className={styles.trainingItem}>
                        <img src={img} alt="img" />
                        <p>{title}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Trening
