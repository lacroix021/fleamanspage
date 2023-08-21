import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import FleamansTitle from '../../assets/fleaman-Title.png';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

export default function NavBar({ max_Width, arrayLinks, setShowLoader }) {
    const body = {maxWidth: max_Width + 'px'};
    const [showMenu, setShowMenu] = useState('');
    const [hardReset, setHardReset] = useState(false);

    const ToggleHamburguer = (e)=> {
        if(showMenu === ''){
            setShowMenu(styles.show);
        }
        else{
            setShowMenu('');
        }
        
        setHardReset(!hardReset);
    };

    const ShowLoader = ()=> {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        setShowMenu('');
    }

  return (
    <>
        <header className={styles.header}>
            <div className={styles.containerHamburguer} onClick={ToggleHamburguer} data-menu="hamburguer">
                {showMenu === styles.show ? 
                    <AiOutlineMenuFold data-menu="hamburguer"/>
                :
                    <AiOutlineMenuUnfold data-menu="hamburguer"/>
                }
            </div>
            <section className={styles.bannerHeader}>
                <div className={styles.block} style={ body }>
                    <div className={styles.containerImage}>
                        <img src={ FleamansTitle } alt="fleamans-title" />
                    </div>
                    <div className={`${styles.overlay} ${showMenu === styles.show ? styles.showingOverlay : ''}`} onClick={()=> setShowMenu('')}> </div>
                    <ul className={`${styles.menu} ${showMenu}`}>
                        { arrayLinks.map(({ name, slug, icon }, index)=>{
                            return(
                                <li key={ index } >
                                    
                                    <NavLink 
                                        className={({ isActive }) => (isActive ? "active" : null)} 
                                        to={`/fleamans-page/${slug}`} 
                                        onClick={ ShowLoader } 
                                    >
                                        <div className={styles.iconLink}>
                                            { icon }
                                        </div>
                                        { name }
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </header>
    </>
  )
}
