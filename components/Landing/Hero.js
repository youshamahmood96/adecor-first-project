import styles from '../../styles/Hero.module.css'
import { useEffect, useState } from 'react'
import { scroller } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css"
const Hero = ()=>{
    const smoothScroll = (id) => {
        scroller.scrollTo(id, {
            smooth: true,
            offset: -70,
            duration: 1000,
        })
    }
    let [opacity,setOpacity] = useState(1)
    useEffect(()=>{
        Aos.init({
            duration:2000,
            once: false,
            mirror: true, 
        },[])
        const handleScroll = () =>{
            const y = window.scrollY
            setOpacity(1-(y/800))
        }
        window.addEventListener('scroll',handleScroll,false)
        return () =>{
            window.removeEventListener('scroll',handleScroll,false)
        }
    },[opacity])
    return(
        <div data-aos="fade-down" style={{opacity}} >
        <div id={styles.hero}>
        <div className={styles.top}>
        <h1>God Guides</h1>
        <button className={styles.heroButton} >and the</button>
        </div>
        <div className={styles.bottom}>
        <h1>Devil Divides</h1>
        <img  style={{color:'white !important'}} src="/scroll-btn-white.png" onClick={()=>smoothScroll('verse-container')}  alt=""/>
        </div>
        </div>
        </div>
        
    )
}
export default Hero 