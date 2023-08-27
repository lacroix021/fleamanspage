import React, { useContext } from 'react';
import styles from './NotFound.module.scss';
import { generalContext } from '../../context/GeneralContext';

export default function NotFound() {
  const max_width = useContext(generalContext);
  const body = {maxWidth: max_width};

  return (
    <main className={styles.NotFound}>
      <div className={styles.container} style={ body }>
        <h1>There's nothing here...</h1>
        <div className={styles.video}>
          <iframe src="https://www.youtube.com/embed/tpNtoyI3hs4?si=Zv2ioTJ1dBf-sHlz" title="YouTube video player" autoplay={true}></iframe>
        </div>
      </div>
    </main>
  )
}
