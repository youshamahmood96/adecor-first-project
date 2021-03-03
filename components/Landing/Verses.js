import React, { useEffect } from 'react'
import styles from '../../styles/Verses.module.css'
import data from './Verses.json'
import Aos from 'aos';
import "aos/dist/aos.css"
const Verses = ()=>{
    const {allVerses} = data
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div id="verse-container">
        {
            allVerses.map((data,index)=>(
                <div id={styles.verses} key={index}>
                <div className={styles.center}>
                <div data-aos="fade-up" >
                <p className={styles.verse}>{data.verse}</p>
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