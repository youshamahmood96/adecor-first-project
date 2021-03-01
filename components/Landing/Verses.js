import React from 'react'
import styles from '../../styles/Verses.module.css'
import data from './Verses.json'
import Fade from 'react-reveal/Fade';
const Verses = ()=>{
    const {allVerses} = data
    return(
        <div id="verse-container">
        {
            allVerses.map((data,index)=>(
                <div id={styles.verses} key={index}>
                <div className={styles.center}>
                
                <Fade bottom>
                <p className={styles.verse}>{data.verse}</p>
                <h4 className={styles.reference} > <hr/> &nbsp;&nbsp; {data.reference} &nbsp;&nbsp; <hr/> </h4>
                </Fade>
                </div>
                </div>
    ))
        }
        </div>
    )
}
export default Verses