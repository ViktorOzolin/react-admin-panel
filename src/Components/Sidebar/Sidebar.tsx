import React from 'react';
import styles from './Sidebar.module.css'
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarUser from './SidebarUser/SidebarUser';


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarHeader />
            <SidebarUser />
        </div>
    );
}

export default Sidebar