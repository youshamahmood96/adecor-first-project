import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Verses.module.css'
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
const Verses = () => {
    const propA = useRef(null)
    const propB = useRef(null)
    const propC = useRef(null)
    const propD = useRef(null)
    const [progressA, setProgressA] = useState(0.15)
    const [progressB, setProgressB] = useState(0)
    const [progressC, setProgressC] = useState(0)
    const [progressD, setProgressD] = useState(0)
    function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(propA.current, {
            scrollTrigger: {
                trigger: propA.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    // console.log(self.progress);
                    if(self.progress<=0.15){
                        setProgressA(self.progress+0.6)
                    }
                    else{setProgressA(Math.cos(degrees_to_radians(self.progress * 90)*2)+0.2)}
                    if(self.progress === 0 || self.progress === 1){
                        setProgressA(0.15)
                    }
                }
            },
        })
        gsap.to(propB.current, {
            scrollTrigger: {
                trigger: propB.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if(self.progress<=0.15){
                        setProgressB(self.progress+0.6)
                    }
                    else{setProgressB(Math.cos(degrees_to_radians(self.progress * 90)*2)+0.2)}
                    if(self.progress === 0 || self.progress === 1){
                        setProgressB(0.05)
                    }
                }
            },
        })
        gsap.to(propC.current, {
            scrollTrigger: {
                trigger: propC.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => { 
                    if(self.progress<=0.13){
                        console.log(self.progress);
                        setProgressC(self.progress+0.6)
                    }
                    else{setProgressC(Math.cos(degrees_to_radians(self.progress * 90)*2)+0.2)}
                    if(self.progress === 0 || self.progress === 1){
                        setProgressC(0.05)
                    }
                }
                    
            },
        })
        gsap.to(propD.current, {
            scrollTrigger: {
                trigger: propD.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if(self.progress<=0.11){
                        console.log(self.progress);
                        setProgressD(self.progress+0.6)
                    }
                    else{setProgressD(Math.cos(degrees_to_radians(self.progress * 90)*2)+0.2)}
                    if(self.progress === 0 || self.progress === 1){
                        setProgressD(0.05)
                    }
                }
            },
        })
    }, [propA, propB, propC, propD])
    console.log(progressA);
    return (

        <React.Fragment>
            <div id="verse-container"
                className={styles.verses}

            >
                <div className={styles.centerA}>
                    <div ref={propA}
                    style={{ opacity: progressA }}  >
                    <p className={styles.verse}>
                        By the sun and its brightness, and the moon as it follows it, and the day as it unveils it, and the night as it conceals it! And by heaven and ˹the One˺ Who built it, and the earth and ˹the One˺ Who spread it! And by the soul and ˹the One˺ Who fashioned it, then with ˹the knowledge of˺ right and wrong inspired it! Successful indeed is the one who purifies their soul, and doomed is the one who corrupts it!
                </p>
                    <h4 className={styles.reference} > <hr /> &nbsp;&nbsp; Chapter 91 | Verse 1-10 &nbsp;&nbsp; <hr /> </h4>
                    </div>
                </div>
            </div>
            <div
                ref={propB}
                style={{ opacity: progressB }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                        For indeed, We ˹alone˺ created humans from a drop of mixed fluids, ˹in order˺ to test them, so We made them hear and see. We already showed them the Way, whether they ˹choose to˺ be grateful or ungrateful.
                </p>
                    <h4 className={styles.reference} > <hr /> &nbsp;&nbsp; Chapter 76 | Verse 3 &nbsp;&nbsp; <hr /> </h4>
                </div>
            </div>
            <div
                ref={propC}
                style={{ opacity: progressC }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                        It is We Who created them and perfected their ˹physical˺ form. But if We will, We can easily replace them with others. Surely this is a reminder. So let whoever wills take the ˹Right˺ Way to their Lord. But you cannot will ˹to do so˺ unless Allah wills. Indeed, Allah is All-Knowing, All-Wise
                </p>
                    <h4 className={styles.reference} > <hr /> &nbsp;&nbsp; Chapter 76 | Verse 28-30 &nbsp;&nbsp; <hr /> </h4>
                </div>
            </div>
            <div
                ref={propD}
                style={{ opacity: progressD }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                        Allah is the Light of the heavens and the earth. His light is like a niche in which there is a lamp, the lamp is in a crystal, the crystal is like a shining star, lit from ˹the oil of˺ a blessed olive tree, ˹located˺ neither to the east nor the west, whose oil would almost glow, even without being touched by fire. Light upon light! Allah guides whoever He wills to His light. And Allah sets forth parables for humanity. For Allah has ˹perfect˺ knowledge of all things.
                </p>
                    <h4 className={styles.reference} > <hr /> &nbsp;&nbsp; Chapter 24 | Verse 35 &nbsp;&nbsp; <hr /> </h4>
                </div>
            </div>
        </React.Fragment>

    )
}
export default Verses