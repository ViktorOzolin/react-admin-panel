import React from 'react';
import styles from './SidebarLogo.module.css';




const SidebarLogo = () => {
    return (
        <div className={styles.logo}>
            <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1MmB8?ver=6c43g' alt='logo' className={styles.logo__img}/>
        </div>
    );
}

export default SidebarLogo