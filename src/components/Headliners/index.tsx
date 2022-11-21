import styles from './headliners.module.css'
import one from '/public/headliners/1.png'
import two from '/public/headliners/2.png'
import three from '/public/headliners/3.png'
import four from '/public/headliners/4.png'
import five from '/public/headliners/5.png'
import six from '/public/headliners/6.png'
import play from '/public/headliners/play.png'
import voice from '/public/headliners/voice.png'

export default function Headliners() {
    return (
        <div id={styles.wrapper}>
            <div id={styles.top}>
                <h1 id={styles.title}>HEADLINERS</h1>
                <button id={styles.button}>See all</button>
            </div>
            <p id={styles.para}>Enjoy mesmerizing performances of more than 800 of the plant's fonest electronic artists.</p>
            <div id={styles.flex}>
                    <div id={styles.box} style={{height:'27rem'}}>
                        <img src={one} id={styles.image} style={{height:'17.9rem'}} />
                        <h3 id={styles.smallTitle}>Zeds Dead</h3>
                        <div id={styles.footer}>
                            <img src={play} id={styles.iconWrapper}/>
                            <img src={voice} id={styles.voice}/>
                            <p id={styles.time}>00:00</p>
                        </div>
                    </div>
                    <div id={styles.box} style={{height:'33.3rem',marginTop:'7rem'}}>
                        <img src={two} id={styles.image} style={{height:'23.1rem'}}/>
                        <h3 id={styles.smallTitle}>Gordin City</h3>
                        <div id={styles.footer}>
                            <img src={play} id={styles.iconWrapper}/>
                            <img src={voice} id={styles.voice}/>
                            <p id={styles.time}>00:00</p>
                        </div>
                    </div>
                    <div id={styles.box} style={{height:'25rem',marginTop:'14rem'}}>
                        <img src={three} id={styles.image} style={{height:'15.1rem'}}/>
                        <h3 id={styles.smallTitle}>Kaskade</h3>
                        <div id={styles.footer}>
                            <img src={play} id={styles.iconWrapper}/>
                            <img src={voice} id={styles.voice}/>
                            <p id={styles.time}>00:00</p>
                        </div>
                    </div>
                    <div id={styles.box} style={{ height:'22.5rem',marginTop:'-10rem'}}>
                        <img src={four} id={styles.image} style={{height:'14rem'}}/>
                        <h3 id={styles.smallTitle}>Dixon</h3>
                        <div id={styles.footer}>
                            <img src={play} id={styles.iconWrapper}/>
                            <img src={voice} id={styles.voice}/>
                            <p id={styles.time}>00:00</p>
                        </div>
                    </div>
                    <div id={styles.box} style={{height:'30rem',marginTop:'2rem'}}>
                        <img src={five} id={styles.image} style={{height:'21.25rem'}}/>
                        <h3 id={styles.smallTitle}>Rezz</h3>
                        <div id={styles.footer}>
                            <img src={play} id={styles.iconWrapper}/>
                            <img src={voice} id={styles.voice}/>
                            <p id={styles.time}>00:00</p>
                        </div>
                    </div>
                    <div id={styles.box} style={{height:'23rem'}}>
                        <img src={six} id={styles.image} style={{height:'14.625rem'}} />
                        <h3 id={styles.smallTitle}>Tale of Us</h3>
                        <div id={styles.footer}>
                            <img src={play} id={styles.iconWrapper}/>
                            <img src={voice} id={styles.voice}/>
                            <p id={styles.time}>00:00</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}