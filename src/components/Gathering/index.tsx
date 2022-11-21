import styles from './gathering.module.css'
import girl from '/public/gathering/girl.png'
import line from '/public/gathering/line.png'
import star from '/public/gathering/star.png'

export default function Gathering() {
    return (
        <div id={styles.wrapper}>
            <div id={styles.container}>
                <h1 id={styles.title}>The <br /> GATHERING</h1>
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
                <div id={styles.para}>
                    Goove fest one and only official opening party.
                </div>
            </div>
        </div>
    )
}