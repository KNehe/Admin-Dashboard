import styles from '../../styles/Icons.module.scss';
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopSecIcon = ({icon}) =>{

    return(
        <div className={styles.top_sec_icon}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </div>
    )

}

export default TopSecIcon;