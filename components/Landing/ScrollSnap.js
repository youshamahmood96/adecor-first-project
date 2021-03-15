import React from 'react';
import styles from '../../styles/ScrollSnap.module.css'
import HeroMobile from './HeroMobile';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {AiOutlineCloseCircle} from 'react-icons/ai';
const ScrollSnap = () => {
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
          width: '70vw',
          backgroundColor: theme.palette.background.paper,
          border: 'none',
          outline:'none',
          borderRadius:'10px', 
          padding: theme.spacing(2, 4, 3)
        },
        close:{
          marginLeft:'70vw',
          height: '25px',
          width: '25px'
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
          <AiOutlineCloseCircle className={classes.close} onClick={handleClose} />
            <div className={classes.modalText} >
            <h2 style={{textAlign: 'center',marginTop:'-20px'}} id="simple-modal-title">Text about sun</h2>
            <hr/>
            <p id="simple-modal-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.
            </p>
            </div>
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
        <div className={styles.portfolioParent} style={{ height: '100vh' }}>
        
        <div className={styles.hereM}>
        <HeroMobile></HeroMobile>
        </div>
        <div className={styles.here}>
        <div  className="center-global" >
        <div>
        <p>By the sun and its brightness, and the moon as it follows it, and the day as it unveils it, and the night as it conceals it! And by heaven and ˹the One˺ Who built it, and the earth and ˹the One˺ Who spread it! And by the soul and ˹the One˺ Who fashioned it, then with ˹the knowledge of˺ right and wrong inspired it! Successful indeed is the one who purifies their soul, and doomed is the one who corrupts it!</p>
         <div className={styles.horizontalLine} ><h4><span>Chapter 91 | Verse 1-10</span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        For indeed, We ˹alone˺ created humans from a drop of mixed fluids, ˹in order˺ to test them, so We made them hear and see. We already showed them the Way, whether they ˹choose to˺ be grateful or ungrateful.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 76 | Verse 3
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        It is <span onClick={handleOpen} className={styles.magical} >We</span> Who created them and perfected their ˹physical˺ form. But if We will, We can easily replace them with others. Surely this is a reminder. So let whoever wills take the ˹Right˺ Way to their Lord. But you cannot will ˹to do so˺ unless Allah wills. Indeed, Allah is All-Knowing, All-Wise
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 76 | Verse 28-30
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        Allah is the Light of the heavens and the earth. His light is like a niche in which there is a lamp, the lamp is in a crystal, the crystal is like a shining star, lit from ˹the oil of˺ a blessed olive tree, ˹located˺ neither to the east nor the west, whose oil would almost glow, even without being touched by fire. Light upon light! Allah guides whoever He wills to His light. And Allah sets forth parables for humanity. For Allah has ˹perfect˺ knowledge of all things.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 24 | Verse 35
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        This is the <span onClick={handleOpen} className={styles.magical} >Book</span>! There is no doubt about it—a guide for those mindful ˹of Allah˺, who believe in the unseen, establish prayer, and donate from what We have provided for them, and who believe in what has been revealed to you ˹O <span onClick={handleOpen} className={styles.magical} >Prophet</span>˺ and what was revealed before you, and have sure faith in the Hereafter. It is they who are ˹truly˺ guided by their Lord, and it is they who will be successful. As for those who persist in disbelief, it is the same whether you warn them or not—they will never believe. Allah has sealed their hearts and their hearing, and their sight is covered. They will suffer a tremendous punishment. And there are some who say, “We believe in Allah and the Last Day,” yet they are not ˹true˺ believers.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 2 | Verse 2-8
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        ˹It is˺ Allah ˹Who˺ has sent down the best message—a Book of perfect consistency and repeated lessons—which causes the skin ˹and hearts˺ of those who fear their Lord to tremble, then their skin and hearts soften at the mention of ˹the mercy of˺ Allah. That is the guidance of Allah, through which He guides whoever He wills. But whoever Allah <span onClick={handleOpen} className={styles.magical} >leaves to stray</span> will be left with no guide.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 39 | Verse 23
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        It is not ˹possible˺ for a human being to have Allah communicate with them, except through inspiration, or from behind a veil, or by sending a messenger-angel to reveal whatever He wills by His permission. He is surely <span onClick={handleOpen} className={styles.magical} >Most High, All-Wise</span>. And so We have sent to you ˹O Prophet˺ a revelation by Our command. You did not know of ˹this˺ Book and faith ˹before˺. But We have made it a light, by which We guide whoever We will of Our servants. And you are truly leading ˹all˺ to the Straight Path—the Path of Allah, to Whom belongs whatever is in the heavens and whatever is on the earth. Surely to Allah all matters will return ˹for judgment˺. 
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 42 | Verse 51-53
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        We have not sent a messenger except in the language of his people to clarify ˹the message˺ for them. Then Allah leaves whoever He wills to stray and guides whoever He wills. And He is the Almighty, All-Wise.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 14 | Verse 4
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        He has ordained for you ˹believers˺ the Way which He decreed for Noah, and what We have revealed to you ˹O Prophet˺ and what We decreed for Abraham, Moses, and Jesus, ˹commanding:˺ “Uphold the faith, and make no divisions in it.” What you call the polytheists to is unbearable for them. Allah chooses for Himself whoever He wills, and guides to Himself whoever turns ˹to Him˺.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 42 | Verse 13
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        O <span onClick={handleOpen} className={styles.magical} >People of the Book</span>! Now <span onClick={handleOpen} className={styles.magical} >Our Messenger</span> has come to you, revealing much of what you have hidden of the Scriptures and disregarding much. There certainly has come to you from Allah a light and a clear Book through which Allah guides those who seek His pleasure to the ways of peace, brings them out of darkness and into light by His Will, and guides them to the Straight Path. 
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 5 | Verse 15-16
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        As for those who believe in Allah and hold fast to Him, He will admit them into His mercy and grace and guide them to Himself through the Straight Path.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 4 | Verse 175
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        It is upon Allah ˹alone˺ to ˹clearly˺ show the Straight Way. Other ways are deviant. Had He willed, He would have easily imposed guidance upon all of you. 
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 16 | Verse 9
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        ˹This is˺ the truth from your Lord. Whoever wills let them believe, and whoever wills let them disbelieve.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 18 | Verse 29
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here}>
        <div className="center-global" >
        <div>
        <p>
        Let there be no compulsion in religion, for the truth stands out clearly from falsehood. So whoever renounces false gods and believes in Allah has certainly grasped the firmest, unfailing hand-hold. And Allah is All-Hearing, All-Knowing.
        </p>
        <div className={styles.horizontalLine} ><h4><span>
        Chapter 2 | Verse 256
        </span></h4>  </div>
        </div>
        </div>
        </div>
        <div className={styles.here} >
        <div className="center-global" >
        <div id="cbox-5xY3X9avT56K4n0T"></div>
        </div>
        </div>



        </div>
      </React.Fragment>
    );
};

export default ScrollSnap;