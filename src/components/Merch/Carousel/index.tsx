import styles from './carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import one from '/public/merch/one.svg'
import two from '/public/merch/two.svg'
import three from '/public/merch/three.svg'

export default function Carousel() {
    return (
        <Swiper
        slidesPerView={2.4}
        id={styles.swiper}
      >
        <SwiperSlide className={styles.slider} id={styles.one}>
            <img id={styles.one} src={one}/>
        </SwiperSlide>
        <SwiperSlide className={styles.slider} id={styles.one}>
            <img id={styles.two} src={two}/>
        </SwiperSlide>
        <SwiperSlide className={styles.slider} id={styles.one}>
            <img id={styles.three} src={three}/>
        </SwiperSlide>
      </Swiper>
    )
}