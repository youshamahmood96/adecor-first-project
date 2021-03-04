import React, { useEffect, useState } from 'react'
import styles from '../../styles/Verses.module.css'
import data from './Verses.json'
import Aos from 'aos';
import "aos/dist/aos.css"
const Verses = ()=>{
    const {allVerses} = data
    let [opacity,setOpacity] = useState(1)
    useEffect(()=>{
        const handleScroll = () =>{
            const y = window.scrollY
            let z = y%window.innerHeight*0.3
            function toRadians (angle) {
                return angle * (Math.PI / 180);
            }
            if(Math.sin(toRadians(z))>=0){
                setOpacity(Math.abs(Math.sin(toRadians(z+90)))+0.3)
            }
        }
        window.addEventListener('scroll',handleScroll,false)
        return () =>{
            window.removeEventListener('scroll',handleScroll,false)
        }
    },[])
    console.log(opacity);
    return(
        <div id="verse-container">
        {
            allVerses.map((data,index)=>(
                <div 
                id={styles.verses} 
                key={index} 
                style={{opacity}} 
                >
                <div className={styles.center}>
                <div >
                <p  className={styles.verse}>{data.verse}</p>
                <h4 className={styles.reference} > <hr/> &nbsp;&nbsp; {data.reference} &nbsp;&nbsp; <hr/> </h4>
                </div>
                </div>
                </div>
    ))
        }
        </div>
    )
}
export default Verses