import React, { useContext } from 'react';
import styles from './Home.module.scss';

import { generalContext } from '../../context/GeneralContext';

import img1 from '../../assets/screenshots/1.png';
import img2 from '../../assets/screenshots/2.png';
import img3 from '../../assets/screenshots/3.png';
import img4 from '../../assets/screenshots/4.png';
import img5 from '../../assets/screenshots/5.png';
import img6 from '../../assets/screenshots/6.png';
import img7 from '../../assets/screenshots/7.png';

import Carousel from '../../Components/Carousel/Carousel';

export default function Home() {
  const max_width = useContext(generalContext);
  const body = {maxWidth: max_width};
  

  const images = [img1, img2, img3, img4, img5, img6, img7];
  const info = `These screenshots were taken in-game while it was being developed.`;
  const smallInfo = `(may change in the final version).`;
  const title = "In Game Images";

  return (
    <>
      <main className={styles.MainContent}>
        <div className={styles.block} style={ body }>
          <h1>{ title }</h1>
          <div className={styles.content}>
            <div className={styles.carouselContainer}>
              <Carousel array={ images }/>
            </div>
            <div className={styles.containerInfo}>
              <span className={styles.info}>
                { info }
                <small>
                  { smallInfo }
                </small>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
