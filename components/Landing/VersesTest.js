import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Verses.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import Hero from './Hero';
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Verses = () => {
    const hero = useRef(null)
    const propA = useRef(null)
    const propB = useRef(null)
    const propC = useRef(null)
    const propD = useRef(null)
    const propE = useRef(null)
    const propF = useRef(null)
    const propG = useRef(null)
    const propH = useRef(null)
    const propI = useRef(null)
    const propJ = useRef(null)
    const propK = useRef(null)
    const propL = useRef(null)
    const propM = useRef(null)
    const propN = useRef(null)
    const [progressA, setProgressA] = useState(0)
    const [progressB, setProgressB] = useState(0)
    const [progressC, setProgressC] = useState(0)
    const [progressD, setProgressD] = useState(0)
    const [progressE,setProgressE] = useState(0)
    const[progressF,setProgressF] = useState(0)
    const[progressG,setProgressG] = useState(0)
    const[progressH,setProgressH] = useState(0)
    const[progressI,setProgressI] = useState(0)
    const[progressJ,setProgressJ] = useState(0)
    const[progressK,setProgressK] = useState(0)
    const[progressL,setProgressL] = useState(0)
    const[progressM,setProgressM] = useState(0)
    const[progressN,setProgressN] = useState(0)

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
                    if (self.progress <= 1 && self.progress >= 0.3) {
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
                        setProgressB(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.3))
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
                        setProgressB(self.progress + 0.4)
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
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressE(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
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
        gsap.to(propE.current, {
            scrollTrigger: {
                trigger: propE.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressF(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressE(self.progress + 0.6)
                    }
                    else { setProgressE(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressE(0.05)
                    }
                }

            },
        })
        gsap.to(propF.current, {
            scrollTrigger: {
                trigger: propF.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressG(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        setProgressF(self.progress + 0.6)
                    }
                    else { setProgressF(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressF(0.05)
                    }
                }

            },
        })
        gsap.to(propG.current, {
            scrollTrigger: {
                trigger: propG.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressH(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressG(self.progress + 0.6)
                    }
                    else { setProgressG(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressG(0.05)
                    }
                }

            },
        })
        gsap.to(propH.current, {
            scrollTrigger: {
                trigger: propH.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressI(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressH(self.progress + 0.6)
                    }
                    else { setProgressH(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressH(0.05)
                    }
                }

            },
        })
        gsap.to(propI.current, {
            scrollTrigger: {
                trigger: propI.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressJ(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        setProgressI(self.progress + 0.6)
                    }
                    else { setProgressI(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressI(0.05)
                    }
                }

            },
        })
        gsap.to(propJ.current, {
            scrollTrigger: {
                trigger: propJ.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressK(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressJ(self.progress + 0.6)
                    }
                    else { setProgressJ(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressJ(0.05)
                    }
                }

            },
        })
        gsap.to(propK.current, {
            scrollTrigger: {
                trigger: propK.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressL(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressK(self.progress + 0.6)
                    }
                    else { setProgressK(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressK(0.05)
                    }
                }

            },
        })
        gsap.to(propL.current, {
            scrollTrigger: {
                trigger: propL.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressM(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressL(self.progress + 0.6)
                    }
                    else { setProgressL(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressL(0.05)
                    }
                }

            },
        })
        gsap.to(propM.current, {
            scrollTrigger: {
                trigger: propM.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 1 && self.progress >= 0.3) {
                        setProgressN(Math.abs(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2))
                    }
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressM(self.progress + 0.6)
                    }
                    else { setProgressM(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressM(0.05)
                    }
                }

            },
        })
        gsap.to(propN.current, {
            scrollTrigger: {
                trigger: propN.current,
                toggleActions: "restart restart restart restart",
                start: "top center",
                end: "bottom top",
                onUpdate: self => {
                    if (self.progress <= 0.13) {
                        console.log(self.progress);
                        setProgressN(self.progress + 0.6)
                    }
                    else { setProgressN(Math.cos(degrees_to_radians(self.progress * 90) * 2) + 0.2) }
                    if (self.progress === 0 || self.progress === 1) {
                        setProgressN(0.05)
                    }
                }

            },
        })
        
    }, [propA, propB, propC, propD,propE,propF,propG,propH,propI,propJ,propK,propL,propM,propN])
      
      function getModalStyle() {
        const top = 50 
        const left = 50
      
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
          border: 'none',
          outline:'none',
          borderRadius:'10px', 
          padding: theme.spacing(2, 4, 3),
        },
        close:{
            position: 'relative',
            marginLeft:'400px',
            cursor:'pointer',
            height:'25px',
            width:'25px'
        },
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
          <AiOutlineCloseCircle className={classes.close} onClick={handleClose} />
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
                            By the sun and its brightness, and the moon as it follows it, and the day as it unveils it, and the night as it conceals it! And by heaven and ˹the One˺ Who built it, and the earth and ˹the One˺ Who spread it! And by the soul and ˹the One˺ Who fashioned it, then with ˹the knowledge of˺ right and wrong inspired it! Successful indeed is the one who purifies their soul, and doomed is the one who corrupts it!
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
                        It is   <span onClick={handleOpen} className={styles.magical} >We</span>  Who created them and perfected their ˹physical˺ form. But if We will, We can easily replace them with others. Surely this is a reminder. So let whoever wills take the ˹Right˺ Way to their Lord. But you cannot will ˹to do so˺ unless <span onClick={handleOpen} className={styles.magical} > Allah</span> wills. Indeed, Allah is All-Knowing, All-Wise
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
            <div
                ref={propE}
                style={{ opacity: progressE }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    This is the <span onClick={handleOpen} className={styles.magical} >Book</span>! There is no doubt about it—a guide for those mindful ˹of Allah˺, who believe in the unseen, establish prayer, and donate from what We have provided for them, and who believe in what has been revealed to you ˹O <span onClick={handleOpen} className={styles.magical} >Prophet</span>˺ and what was revealed before you, and have sure faith in the Hereafter. It is they who are ˹truly˺ guided by their Lord, and it is they who will be successful. As for those who persist in disbelief, it is the same whether you warn them or not—they will never believe. Allah has sealed their hearts and their hearing, and their sight is covered. They will suffer a tremendous punishment. And there are some who say, “We believe in Allah and the Last Day,” yet they are not ˹true˺ believers.
                </p>
                    <div className={styles.separator} > <h4>Chapter 2 | Verse 2-8</h4>  </div>

                </div>
            </div>
            <div
                ref={propF}
                style={{ opacity: progressF }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    ˹It is˺ Allah ˹Who˺ has sent down the best message—a Book of perfect consistency and repeated lessons—which causes the skin ˹and hearts˺ of those who fear their Lord to tremble, then their skin and hearts soften at the mention of ˹the mercy of˺ Allah. That is the guidance of Allah, through which He guides whoever He wills. But whoever Allah<span onClick={handleOpen} className={styles.magical} >leaves to stray</span> will be left with no guide.
                </p>
                    <div className={styles.separator} > <h4>Chapter 39 | Verse 23</h4>  </div>

                </div>
            </div>
            <div
                ref={propG}
                style={{ opacity: progressG }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    It is not ˹possible˺ for a human being to have Allah communicate with them, except through inspiration, or from behind a veil, or by sending a messenger-angel to reveal whatever He wills by His permission. He is surely <span onClick={handleOpen} className={styles.magical} >Most High,All-Wise</span>. And so We have sent to you ˹O Prophet˺ a revelation by Our command. You did not know of ˹this˺ Book and faith ˹before˺. But We have made it a light, by which We guide whoever We will of Our servants. And you are truly leading ˹all˺ to the Straight Path—the Path of Allah, to Whom belongs whatever is in the heavens and whatever is on the earth. Surely to Allah all matters will return ˹for judgment˺. 
                </p>
                    <div className={styles.separator} > <h4>Chapter 42 | Verse 51-53</h4>  </div>

                </div>
            </div>
            <div
                ref={propH}
                style={{ opacity: progressH }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    We have not sent a messenger except in the language of his people to clarify ˹the message˺ for them. Then Allah leaves whoever He wills to stray and guides whoever He wills. And He is the Almighty, All-Wise.
                </p>
                    <div className={styles.separator} > <h4>Chapter 14 | Verse 4</h4>  </div>

                </div>
            </div>
            <div
                ref={propI}
                style={{ opacity: progressI }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    He has ordained for you ˹believers˺ the Way which He decreed for Noah, and what We have revealed to you ˹O Prophet˺ and what We decreed for Abraham, Moses, and Jesus, ˹commanding:˺ “Uphold the faith, and make no divisions in it.” What you call the polytheists to is unbearable for them. Allah chooses for Himself whoever He wills, and guides to Himself whoever turns ˹to Him˺.
                </p>
                    <div className={styles.separator} > <h4>Chapter 42 | Verse 13</h4>  </div>

                </div>
            </div>
            <div
                ref={propJ}
                style={{ opacity: progressJ }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    O <span onClick={handleOpen} className={styles.magical} >People of the Book</span>! Now <span onClick={handleOpen} className={styles.magical} >Our Messenger</span> has come to you, revealing much of what you have hidden of the Scriptures and disregarding much. There certainly has come to you from Allah a light and a clear Book through which Allah guides those who seek His pleasure to the ways of peace, brings them out of darkness and into light by His Will, and guides them to the Straight Path. 
                </p>
                    <div className={styles.separator} > <h4>Chapter 5 | Verse 15-16</h4>  </div>

                </div>
            </div>
            <div
                ref={propK}
                style={{ opacity: progressK }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    As for those who believe in Allah and hold fast to Him, He will admit them into His mercy and grace and guide them to Himself through the Straight Path.
                </p>
                    <div className={styles.separator} > <h4>Chapter 4 | Verse 175</h4>  </div>

                </div>
            </div>
            <div
                ref={propL}
                style={{ opacity: progressL }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    It is upon Allah ˹alone˺ to ˹clearly˺ show the Straight Way. Other ways are deviant. Had He willed, He would have easily imposed guidance upon all of you. 
                </p>
                    <div className={styles.separator} > <h4>Chapter 16 | Verse 9</h4>  </div>

                </div>
            </div>
            <div
                ref={propM}
                style={{ opacity: progressM }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    “˹This is˺ the truth from your Lord. Whoever wills let them believe, and whoever wills let them disbelieve.” 
                </p>
                    <div className={styles.separator} > <h4> Chapter 18 | Verse 29</h4>  </div>

                </div>
            </div>
            <div
                ref={propN}
                style={{ opacity: progressN }}
                className={styles.verses}
            >
                <div className={styles.center}>
                    <p className={styles.verse}>
                    Let there be no compulsion in religion, for the truth stands out clearly from falsehood. So whoever renounces false gods and believes in Allah has certainly grasped the firmest, unfailing hand-hold. And Allah is All-Hearing, All-Knowing.
                </p>
                    <div className={styles.separator} > <h4> Chapter 2 | Verse 256</h4>  </div>

                </div>
            </div>
        </React.Fragment>

    )
}
export default Verses