import styles from '../../styles/Hero.module.css'
import { motion } from "framer-motion"
import FadeIn from 'react-fade-in';
import { useEffect, useState } from 'react'
import { scroller } from 'react-scroll';
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
        <div id={styles.hero} style={{opacity}} >
        <div className={styles.top}>
        <h1>God Guides</h1>
        <button className={styles.heroButton} >and the</button>
        </div>
        <div className={styles.bottom}>
        <h1>Devil Divides</h1>
        <FadeIn><img src="/scroll-button.png" onClick={()=>smoothScroll('verse-container')}  alt=""/></FadeIn>
        </div>
        </div>
    )
}
export default Hero 