import trening from '../data/data'
import styles from './training.module.css'
function Trening() {
   
    return <div className={styles.blockTrening}> {trening.map(tr => {
        
        const {id, img, category, folding, LFC, sex, title, video} = tr
        return tr.video ? <div key={id} >
        <iframe width="400" height="266" src="https://www.youtube.com/embed/1ZXobu7JvvE" title="YouTube video player"
         frameBorder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p >{title}</p>
    </div> : <div key={id} >
        <img src={img} alt="img" />
        <p >{title}</p>
    </div>
    })}
        </div>
 
    
}
export default Trening
