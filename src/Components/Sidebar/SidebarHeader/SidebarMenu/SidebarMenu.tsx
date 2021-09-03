import React from "react";
import styles from './SidebarMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const SidebarMenu = () => {
    return (
        <div className={styles.menu}>
            <a href="#" className={styles.menu__btn}>
            <FontAwesomeIcon icon={faBars} size='lg'/>
            </a>
        </div>
    );
}

export default SidebarMenu
