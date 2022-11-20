import styles from './navbar.module.css'
import logo from '/public/navbar/logo.png'

export default function Navbar() {
    return (
        <div id={styles.wrapper}>
           <img src={logo} id={styles.logo}/>
           <div id={styles.container}>
                <p className={styles.link}>Headlines</p>
                <p className={styles.link} id={styles.centeredLink}>Pre-party</p>
                <p className={styles.link}>Merch</p>
           </div>
           <button id={styles.button}>
            Buy a ticket
           </button>
        </div>
    )
} 