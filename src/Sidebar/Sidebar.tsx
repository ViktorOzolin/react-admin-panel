import React from 'react';
import styles from './Sidebar.module.css'
import SidebarHeader from './SidebarHeader';


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarHeader />
        </div>
    );
}

export default Sidebar