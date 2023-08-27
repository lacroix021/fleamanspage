import React, { useState } from 'react';
import styles from './ImageMap.module.scss';

export default function ImageMap({ name, imageMap, conventions, hiddenPoints }) {
    const [message, setMessage] = useState('');

    const UpdateMessage = (info, event)=> {
        let map = document.getElementById(name);
        let points = map.querySelectorAll('span');

        points.forEach((point) => {
            point.classList.remove(styles.active);
        });

        event.target.classList.add(styles.active);
        setMessage(info);
    }

    return (
        <div className={styles.ImageMap} id={ name }>
            { conventions.map(({ number, info, posX, posY, type }, index)=> {
                const stylePoint = { top: posY + '%', left: posX + '%' };
                    if(type === "normal"){
                        return(
                            <span className={styles.point} key={ index } style={ stylePoint } onClick={ (event)=> UpdateMessage(info, event) }>{ number }</span>
                        )
                    }else {
                        return(
                            <span className={`${styles.point} ${styles.pointHidden}`} key={ index } style={ stylePoint } onClick={ (event)=> UpdateMessage(info, event) }>{ number }</span>
                        )
                    }
                    
            })}
            { message ? 
                <p className={styles.message}>{ message }</p>
            :
                null
            }
            <img src={ imageMap } alt="map-controlls" />
        </div>
    )
}
