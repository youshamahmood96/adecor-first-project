import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../../styles/Vox.module.css'
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import { allVerses} from './Verses.json'
import Hero from './Hero';
const Vox = () => {
    const ourRefA = useRef()
    const [progress,setProgress] = useState(1)
    function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('0'.current, {
            scrollTrigger: {
                trigger: '0'.current,
                toggleActions: "restart restart restart restart",
                onUpdate:self=>{
                    let progress = self.progress*allVerses.length
                    if(progress<=1){
                        setProgress(progress)
                    }
                    else if(progress>1){
                        setProgress(1-progress%1)
                    }
                }
            }
        })
    },[ourRefA])
    console.log(progress);
    return (
     <div>
     <Hero></Hero>
     {
         allVerses.map((data,index)=>(
             <div style={{opacity:progress}} key={index} ref={ourRefA}>
             <div className={styles.verseWrapper}>
             <div className={styles.verseBody}>
             <p>{data.verse}</p>
             <h4>{data.reference}</h4>
             </div>
             </div>
             </div>
         ))
     }
     </div>

    )
}
export default Vox