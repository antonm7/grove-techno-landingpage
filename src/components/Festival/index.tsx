import { useState, useEffect } from 'react'
import styles from './festival.module.css'
import girl from '/public/festival/girl.png'
import star from '/public/festival/star.png'

export default function Festival() {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
    }
        window.addEventListener('resize', handleResize)
      },[])

    if(dimensions.width > 1000) {
        return (
            <div id={styles.wrapper}>
                <div id={styles.flex}>
                    <div className={styles.box}>
                        <h2>600,000</h2>
                        <h3>People of Groove</h3>
                    </div>
                    <div className={styles.box} id={styles.second}>
                        <h2>600,000</h2>
                        <h3>People of Groove</h3>
                    </div>
                    <div className={styles.box} id={styles.third}>
                        <h2>600,000</h2>
                        <h3>People of Groove</h3>
                    </div>
                </div>
                <div id={styles.content}>
                    <div id={styles.text}>
                        <span id={styles.gro}>GROOVE</span> festival gathered both domestic and international top artists.<span id={styles.enjoy}>ENJOY</span> the unique music during the three days.
                        <img id={styles.girl} src={girl}/>
                        <img id={styles.star} src={star}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id={styles.wrapper}>
                <div id={styles.flex}>
                    <div className={styles.box}>
                        <h2>600,000</h2>
                        <h3>People of Groove</h3>
                    </div>
                    <div className={styles.box} id={styles.second}>
                        <h2>600,000</h2>
                        <h3>People of Groove</h3>
                    </div>
                    <div className={styles.box} id={styles.third}>
                        <h2>600,000</h2>
                        <h3>People of Groove</h3>
                    </div>
                </div>
                <div id={styles.content}>
                    <div id={styles.text}>
                        <span id={styles.gro}>GROOVE</span> festival gathered both domestic and international top artists.<span id={styles.enjoy}>ENJOY</span> the unique music during the three days.
                        <div id={styles.imagesWrapper}>
                            <img id={styles.girl} src={girl}/>
                            <img id={styles.star} src={star}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}