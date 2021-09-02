import React from "react";
import styles from './SidebarHeader.module.css';
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";



const SidebarHeader = () => {

    return (
        <div className={styles.header}>
            <SidebarLogo />
            <SidebarMenu />
        </div>
    );
}

export default SidebarHeader
