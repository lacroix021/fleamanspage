import React from 'react';
import styles from './Footer.module.scss';

import MainLogo from '../../assets/FH-transparent.png';
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FaPatreon, FaPaypal } from "react-icons/fa";

export default function Footer() {

  const info = `Remember that you can support this project by following me on my social networks, 
    or if you want to make a donation, I will leave you my paypal or patreon where I will be uploading 
    content in advance and listening to the ideas that my followers share with me.`;

  return (
    <>
      <footer>
        <div className={styles.containerFooter}>
          <div className={styles.mainLogo}>
            <img src={ MainLogo } alt="fleemans-logo" />
          </div>

          <div className={styles.info}>
            <span>
              { info }
            </span>
            <ul className={styles.socialMedia}>
              <li><a href="https://www.youtube.com/channel/UC399HFBX_kKapEWh6jQ8GaA" target='_blank' rel="noreferrer"><div className={styles.icon}><AiFillYoutube/></div>Youtube</a></li>
              <li><a href="https://www.facebook.com/RamshyCorp/" target='_blank' rel="noreferrer"><div className={styles.icon}><AiFillFacebook/></div>Facebook</a></li>
              <li><a href="https://www.patreon.com/ramshycorp" target='_blank' rel="noreferrer"><div className={styles.icon}><FaPatreon/></div>Patreon</a></li>
              <li><a href="https://www.paypal.me/RamshyCorp" target='_blank' rel="noreferrer"><div className={styles.icon}><FaPaypal/></div>Paypal</a></li>
            </ul>
          </div>

          <ul className={styles.copyright}>
            <li>Ramshy Corp 2023</li>
            <li>© Sounds and Sprites are from Konami</li>
          </ul>
        </div>
      </footer>
    </>
  )
}
