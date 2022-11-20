import styles from './festival.module.css'

export default function Festival() {
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
        </div>
    )
}