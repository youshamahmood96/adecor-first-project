import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Verses.module.css'
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
const Verses = () => {
    const propA = useRef(null)
    const propB = useRef(null)
    const propC = useRef(null)
    const propD = useRef(null)
    const [progressA,setProgressA] = useState(null)
    const [progressB,setProgressB] = useState(null)
    const [progressC,setProgressC] = useState(null)
    const [progressD,setProgressD] = useState(null)
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(propA.current, {
            scrollTrigger: {
                trigger: propA.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    setProgressA(1-self.progress+0.3)
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
                    setProgressB(1-self.progress+0.3)
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
                    setProgressC(1-self.progress+0.3)
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
                    setProgressD(1-self.progress+0.3)
                }
            },
        })
    }, [propA,propB,propC,propD])
        return (

        <>
            <div id="verse-container"
                className={styles.verses}
                
            >
                <div ref={propA}
                style={{opacity:progressA}} className={styles.center}>
                    <p className={styles.verse}>
                        By the sun and its brightness, and the moon as it follows it, and the day as it unveils it, and the night as it conceals it! And by heaven and ˹the One˺ Who built it, and the earth and ˹the One˺ Who spread it! And by the soul and ˹the One˺ Who fashioned it, then with ˹the knowledge of˺ right and wrong inspired it! Successful indeed is the one who purifies their soul, and doomed is the one who corrupts it!
                </p>
                    <h4 className={styles.reference} > <hr /> &nbsp;&nbsp; Chapter 91 | Verse 1-10 &nbsp;&nbsp; <hr /> </h4>
                </div>
            </div>
            <div
            ref={propB}
            style={{opacity:progressB}}
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
            style={{opacity:progressC}}
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
            style={{opacity:progressD}}
            className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                        Allah is the Light of the heavens and the earth. His light is like a niche in which there is a lamp, the lamp is in a crystal, the crystal is like a shining star, lit from ˹the oil of˺ a blessed olive tree, ˹located˺ neither to the east nor the west, whose oil would almost glow, even without being touched by fire. Light upon light! Allah guides whoever He wills to His light. And Allah sets forth parables for humanity. For Allah has ˹perfect˺ knowledge of all things.
                </p>
                    <h4 className={styles.reference} > <hr /> &nbsp;&nbsp; Chapter 24 | Verse 35 &nbsp;&nbsp; <hr /> </h4>
                </div>
            </div>
        </>

    )
}
export default Verses