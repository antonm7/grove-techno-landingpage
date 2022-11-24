import { useState, useEffect } from 'react'
import styles from './gathering.module.css'
import girl from '/public/gathering/girl.png'
import line from '/public/gathering/line.png'
import star from '/public/gathering/star.png'

export default function Gathering() {
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
      
    return (
        <div id={styles.wrapper}>
            <div id={styles.container}>
                <h1 id={styles.title}>The <br /> GATHERING</h1>
                {dimensions.width > 1400 ? null : <div id={styles.para}>
                    Goove fest one and only official opening party.
                </div>}
                <button id={styles.button}>See details</button>
                <img id={styles.girl} src={girl}/>
                <img id={styles.line } src={line }/>
                <img id={styles.star } src={star }/>
                <div id={styles.opening}>
                    Opening
                </div>
                <div id={styles.party}>
                    Party
                </div>
                {dimensions.width > 1400 ? <div id={styles.para}>
                    Goove fest one and only official opening party.
                </div> : null}
            </div>
        </div>
    )
}