import Carousel from './Carousel'
import styles from './merch.module.css'

export default function Merch() {
    return (
        <div id={styles.wrapper}>
            <div id={styles.header}>
                <h1 id={styles.title}>OFFICIAL MERCH</h1>
                <button id={styles.button}>See all</button>
            </div>
            <Carousel />
        </div>
    )
}