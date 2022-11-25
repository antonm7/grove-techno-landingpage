import { useState, useEffect } from 'react'
import styles from './navbar.module.css'
import logo from '/public/navbar/logo.svg'

export default function Navbar() {
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
        <div id={styles.wrapper} >
           <img src={logo} id={styles.logo}/>
           {dimensions.width > 650 ? 
            <>
                <div id={styles.container}>
                    <p className={styles.link}>Headlines</p>
                    <p className={styles.link} id={styles.centeredLink}>Pre-party</p>
                    <p className={styles.link}>Merch</p>
                </div>
                <button id={styles.button}>
                    Buy a ticket
                </button>
            </>
            : <p className={styles.link} style={{paddingRight:'1.5rem'}}>Menu</p>
           }
           
        </div>
    )
} 