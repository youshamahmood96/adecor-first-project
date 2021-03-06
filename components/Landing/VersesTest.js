import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Verses.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import Hero from './Hero';
import {AiOutlineClose} from 'react-icons/ai'
const Verses = () => {
    const hero = useRef(null)
    const propA = useRef(null)
    const propB = useRef(null)
    const propC = useRef(null)
    const propD = useRef(null)
    const [progressA, setProgressA] = useState(0)
    const [progressB, setProgressB] = useState(0)
    const [progressC, setProgressC] = useState(0)
    const [progressD, setProgressD] = useState(0)
    function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(hero.current, {
            scrollTrigger: {
                trigger: hero.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 0.9 && self.progress >= 0.4) {
                        setProgressA(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                }
            },
        })
        gsap.to(propA.current, {
            scrollTrigger: {
                trigger: propA.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressB(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    setProgressA(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2)
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
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressC(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.15) {
                        setProgressB(self.progress + 0.6)
                    }
                    else { setProgressB(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
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
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressD(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressC(self.progress + 0.6)
                    }
                    else { setProgressC(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
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
                    if (self.progress <= 0.11) {
                        console.log(self.progress);
                        setProgressD(self.progress + 0.6)
                    }
                    else { setProgressD(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressD(0.05)
                    }
                }
            },
        })
    }, [propA, propB, propC, propD])
    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }
      
      function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
      
      const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
        close:{
            position: 'relative',
            marginLeft:'400px',
            cursor:'pointer'
        }
      }));
      
        const classes = useStyles();
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);
      
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
      
        const body = (
          <div style={modalStyle} className={classes.paper}>
          <AiOutlineClose className={classes.close} onClick={handleClose} />
            <h2 id="simple-modal-title">Text about sun</h2>
            <p id="simple-modal-description">
              More text about sun
              
            </p>
          </div>
        );
    return (
 
        <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
            <div ref={hero} >
                <Hero  ></Hero>
            </div>

            <div id="verse-container"
                className={styles.verses}

            >
                <div className={styles.centerA}>
                    <div ref={propA}
                        style={{ opacity: progressA }}  >
                        <p className={styles.verse}>
                            By the <span onClick={handleOpen} className={styles.magical} >sun</span> and its brightness, and the moon as it follows it, and the day as it unveils it, and the night as it conceals it! And by heaven and ˹the One˺ Who built it, and the earth and ˹the One˺ Who spread it! And by the soul and ˹the One˺ Who fashioned it, then with ˹the knowledge of˺ right and wrong inspired it! Successful indeed is the one who purifies their soul, and doomed is the one who corrupts it!
                </p>
                        <div className={styles.separator} > <h4>Chapter 91 | Verse 1-10</h4>  </div>
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
                    <div className={styles.separator} > <h4>Chapter 76 | Verse 3</h4>  </div>
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
                    <div className={styles.separator} > <h4>Chapter 76 | Verse 28-30</h4>  </div>

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
                    <div className={styles.separator} > <h4>Chapter 24 | Verse 35</h4>  </div>

                </div>
            </div>
        </React.Fragment>

    )
}
export default Verses