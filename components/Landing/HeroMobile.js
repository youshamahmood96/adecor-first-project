import styles from '../../styles/HeroMobile.module.css'
import "aos/dist/aos.css"
const HeroMobile = ()=>{
    return(
        <div id={styles.hero} >
        <div >
        <div className={styles.top}>
        <h1>God Guides</h1>
        <button className={styles.heroButton} >and the</button>
        </div>
        <div className={styles.bottomMobile}>
        <h1>Devil Divides</h1>
        <img  src="/swipe-left-white.svg"   alt=""/>
        </div>
        </div>
        </div>
        
    )
}
export default HeroMobile