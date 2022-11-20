import styles from './header.module.css'
import rightGirl from '/public/header/rightGirl.png'
import leftGirl from '/public/header/leftGirl.png'
import dog from '/public/header/dog.png'
import line from '/public/header/line.png'
import star from '/public/header/star.png'
import flowers from '/public/header/flowers.png'
import radio from '/public/header/radio.png'
import keys from '/public/header/keys.png'

export default function Header () {
    return (
        <div id={styles.wrapper}>
            <div style={{position:'relative',zIndex:5}}>
                <h2 id={styles.subTitle}>SILOSO BEACH, SENTOSA</h2>
                <h1 id={styles.title}>
                    GRO<span style={{color:'#FA7783'}}>O</span>VE<br />
                    <span style={{position:'relative',zIndex:'2'}}>TECHNO</span><br />
                    <span id={styles.fest}>FEST</span>
                </h1>
                <h2 id={styles.date}>December 2 - 5, 2022</h2>
                <div id={styles.inter}>
                    International
                </div>
                <div id={styles.music}>
                    Music
                </div>
                <img src={rightGirl} id={styles.right}/>
                <img src={leftGirl} id={styles.left}/>
                <img src={dog} id={styles.dog}/>
                <img src={star} id={styles.star}/>
                <img src={line} id={styles.line}/>
                <img src={flowers} id={styles.flowers}/>
                <img src={radio} id={styles.radio}/>
                <img src={keys} id={styles.keys}/>
            </div>
        </div>
    )
}