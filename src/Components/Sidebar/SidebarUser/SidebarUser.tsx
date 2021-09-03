import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import styles from './SidebarUser.module.css'



const SidebarUser = () => {

const [onToggle,setToggle] = useState(false);


const onToggleHandler = (event:any) => {
    setToggle(!onToggle)
}

    return (
        <div className={styles.menu}>
            
            <a href="#" className={styles.button} onClick={onToggleHandler} >
            <div className={styles.avatar}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Antu_config-users.svg/1024px-Antu_config-users.svg.png" alt="photo" className={styles.avatar__img} />
            </div>
                <div className={styles.wrapper}>
                    <div className={styles.username}>Viktor</div>
                    <div className={styles.position}>Programmer</div>
                    <FontAwesomeIcon className={styles.caret} icon={faCaretDown} color="rgb(114, 114, 114)" size='xs'/>
                </div>
            </a>
           {onToggle && 
           <ul className={styles.nav}>
                <li className={styles.link}><a href="#" >My Profile</a></li>
                <li className={styles.link}><a href="#" >Edit Profile</a></li>
                <li className={styles.link}><a href="#" >Settings</a></li> 
            </ul>
            } 
        </div>
    );
}


export default SidebarUser