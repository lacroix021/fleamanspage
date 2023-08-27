import React, { useContext, useState } from 'react';
import styles from './HowToPlay.module.scss';
import { generalContext } from '../../context/GeneralContext';
import ImageMap from '../../Components/ImageMap/ImageMap';
import ImageControlls from '../../assets/Controlls.png';
import Carousel from '../../Components/Carousel/Carousel';
import antirosari from '../../assets/items/anti-rosary.gif';
import armor from '../../assets/items/armor.gif';
import clock from '../../assets/items/clock.gif';
import googles from '../../assets/items/googles.gif';
import grimoire from '../../assets/items/grimoire.gif';

import medusas from '../../assets/enemies/E-medusas.gif';
import ectoplasmas from '../../assets/enemies/E-ecto.gif';
import balloons from '../../assets/enemies/E-balloon.gif';
import ghosts from '../../assets/enemies/E-ghost.gif';

export default function HowToPlay() {
  const max_width = useContext(generalContext);
  const body = {maxWidth: max_width};
  const points = [
    {
      number: 1,
      info: "Control-pad controlls movement direction for the character",
      posX: 11,
      posY: 70,
      type: "normal"
    },
    {
      number: 2,
      info: "Button jump, You can make small or higher jumps depending on whether you hold the button.",
      posX: 80,
      posY: 80,
      type: "normal"
    },
    {
      number: 3,
      info: "Button Attack, You can throw a magic cristal to attack enemies",
      posX: 80,
      posY: 53,
      type: "normal"
    },
    {
      number: "S",
      info: "In the lost library if you manage to last alive more than 50 seconds you will unlock the next level",
      posX: 94,
      posY: 5,
      type: "hidden"
    },
  ];
  

  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const imagesArray = [
    {
      image: antirosari,
      name: "Anti-Rosary",
      description: "Evil icon that when used all enemies will die instantly"
    },
    {
      image: armor,
      name: "Axe and armor",
      description: "Now you can attack enemies with your axe"
    },
    {
      image: clock,
      name: "Clock",
      description: "Stop the time of the enemies around you"
    },
    {
      image: googles,
      name: "Googles",
      description: "Allows you to see in the distance"
    },
    {
      image: grimoire,
      name: "Grimoire",
      description: "Evil object that will surround you for a few seconds, eliminating any enemy that tries to get close"
    }
  ];

  const carouselEnemies = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const enemiesArray = [
    {
      image: medusas,
      name: "",
      description: ""
    },
    {
      image: ectoplasmas,
      name: "",
      description: ""
    },
    {
      image: balloons,
      name: "",
      description: ""
    },
    {
      image: ghosts,
      name: "",
      description: ""
    },
  ];

  const messageEnemies = {
    desktop: "Try to evade all the enemies, if you can destroy them better, the idea is that you are alive as long as possible, killing enemies will add extra seconds to your score",
    mobile: "Try to evade all the enemies, if you can destroy them better, the idea is that you are alive as long as possible, killing enemies will add extra seconds to your score"
  };

  const extraInfo = {
    desktop: "The game contains some secrets to unlock things. It's not easy, but there are clues everywhere, just not everyone can understand them",
    mobile: "The game contains some secrets to unlock things. It's not easy, but there are clues everywhere, just not everyone can understand them"
  };
  const hiddenMessage = {
    clue1: "In the Lost Library as soon as you start, go up to the right platform, where you can see the books, hold down for a few seconds, a sound will let you know that you did it!",
    clue2: "",
  }

  const DescriptionItem = (name, description, event)=> {
    setItemName(name);
    setItemDescription(description);
  }

  return (
    <main className={styles.HowToPlay}>
      <section className={styles.container}>
        <div className={styles.content} style={ body }>
          <div className={styles.headInfo}>
            <h2>Controlls</h2>
            <p className={styles.infoDesktop}>Click in the numbers of the image</p>
            <p className={styles.infoMobile}>Touch the numbers of the image</p>
          </div>
          <div className={styles.imageContainer}>
            <ImageMap name='map-1' imageMap = { ImageControlls } conventions={ points } />
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.alter}`}>
        <div className={styles.content} style={ body }>
          <div className={styles.headInfo}>
            <h2>Items</h2>
            <p className={styles.infoDesktop}>Click on the item you want to know</p>
            <p className={styles.infoMobile}>Touch the item you want to know</p>
          </div>

          <div className={styles.carouselContainer}>
            <Carousel nameSlider="items" array={ imagesArray } extraSettings={ carouselSettings } clickeable={true} clickMethod={ DescriptionItem }/>
          </div>
          <div className={styles.description}>
            <h4>{ itemName }</h4>
            <span>{ itemDescription }</span>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.content} style={ body }>
          <div className={styles.headInfo}>
            <h2>Enemies</h2>
            <p className={styles.infoDesktop}>{ messageEnemies.desktop }</p>
            <p className={styles.infoMobile}>{ messageEnemies.mobile }</p>
          </div>

          <div className={styles.carouselEnemies}>
            <Carousel nameSlider="enemies" array={ enemiesArray } extraSettings={ carouselEnemies }/>
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.alter}`}>
        <div className={styles.content} style={ body }>
          <div className={styles.headInfo}>
            <h2>Extra info</h2>
            <p className={styles.infoDesktop}>{ extraInfo.desktop }</p>
            <p className={styles.infoMobile}>{ extraInfo.mobile }</p>
          </div>
          <div className={styles.hidden}>
            <h2>Please no!</h2>
            <p>{ hiddenMessage.clue1 }</p>
          </div>
        </div>
      </section>

    </main>
  )
}
