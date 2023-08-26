import React, { useContext } from 'react';
import styles from './Privacy.module.scss';
import { generalContext } from '../../context/GeneralContext';

import PrivacyPolicy from '../../Components/PrivacyPolicy/PrivacyPolicy';

export default function Privacy() {
  const max_width = useContext(generalContext);
  const body = {maxWidth: max_width};

  return (
    <main className={styles.Privacy}>
      <div className={styles.container} style={ body }>
        <PrivacyPolicy />
      </div>
    </main>
  )
}
