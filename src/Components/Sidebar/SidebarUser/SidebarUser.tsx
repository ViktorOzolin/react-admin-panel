import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SidebarUser.module.css'



const SidebarUser = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.avatar}>
                <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="photo" className={styles.avatar__img} />
            </div>
            <a href="#" className={styles.button}>
                <div className="wrapper">
                    <div className={styles.username}>Viktor</div>
                    <div className={styles.position}>Programmer</div>
                </div>
                <FontAwesomeIcon icon={faCaretDown} color="rgb(114, 114, 114)"/>
                
            </a>
        </div>
    );
}


export default SidebarUser