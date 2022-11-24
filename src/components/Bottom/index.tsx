import styles from './bottom.module.css'
import logo from '/public/bottom/logo.png'

import facebook from '/public/bottom/facebook.png'
import twitter from '/public/bottom/twitter.png'
import instagram from '/public/bottom/instagram.png'

import pin from '/public/bottom/pin.svg'
import mail from '/public/bottom/mail.svg'

export default function Bottom() {
    return (
        <div id={styles.wrapper}>
            <div id={styles.topWrapper}>
                <h1 id={styles.title}>Lineup <span className={styles.pink}>announcements</span>, useful info, and all important news</h1>
                <div id={styles.flex}>
                    <input id={styles.input} placeholder="Enter your email"/>
                    <div>
                        <button id={styles.button}>Send</button>
                    </div>
                </div>
            </div>
            <div id={styles.container}>
                <div id={styles.left}>
                    <img src={logo} />
                    <div id={styles.iconsWrapper}>
                        <img className={styles.icon} src={facebook}/>
                        <img className={styles.icon} src={twitter}/>
                        <img className={styles.icon} src={instagram}/>
                    </div>
                </div>
                <div id={styles.right}>
                    <div className={styles.row}>
                        <h3 className={styles.main}>EXPLORE</h3>
                        <h4 className={styles.link}>Headlines</h4>
                        <h4 className={styles.link}>Pre-party</h4>
                        <h4 className={styles.link}>Merch</h4>
                    </div>
                    <div className={styles.row}>
                        <h3 className={styles.main}>INFO</h3>
                        <h4 className={styles.link}>Groove Crew</h4>
                        <h4 className={styles.link}>For sponsors</h4>
                        <h4 className={styles.link}>Cookie settings</h4>
                    </div>
                    <div className={styles.row}>
                        <h3 className={styles.main}>CONTACTS</h3>
                        <h4 className={styles.link}>
                            <img src={pin}/>
                            137 Market St.Singapore 048943
                        </h4>
                        <h4 className={styles.link}>
                            <img src={mail}/>
                            hello@groovefest.com
                        </h4>
                    </div>
                </div>
            </div>
            <div id={styles.licanse}>
                <h3>Groove Techno 2022 all right reserved</h3>
            </div>
        </div>
    )
}