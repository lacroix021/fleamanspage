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

  const imagesArray = [
    {
      image: img1,
      name: "",
      description: ""
    },
    {
      image: img2,
      name: "",
      description: ""
    },
    {
      image: img3,
      name: "",
      description: ""
    },
    {
      image: img4,
      name: "",
      description: ""
    },
    {
      image: img5,
      name: "",
      description: ""
    },
    {
      image: img6,
      name: "",
      description: ""
    },
    {
      image: img7,
      name: "",
      description: ""
    },
  ];

  const info = `These screenshots were taken in-game while it was being developed.`;
  const smallInfo = `(may change in the final version).`;
  const title = "In Game Images";
  const VideoInfo =`Gameplay captured in development, there may be changes in the final version`;

  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <main className={styles.MainContent}>
        <div className={styles.block} style={ body }>
          <h1>{ title }</h1>
          
          <div className={styles.content}>
            <div className={styles.carouselContainer}>
              <Carousel nameSlider="screenshots" array={ imagesArray } extraSettings={ carouselSettings }/>
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

        <section className={styles.videoContainer} >
          <div className={styles.container} style={ body }>
            <div className={styles.asideInfo}>
              { VideoInfo }
            </div>
            <div className={styles.asideVideo}>
              <iframe src="https://www.youtube.com/embed/tpNtoyI3hs4?si=Zv2ioTJ1dBf-sHlz" title="YouTube video player"></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
