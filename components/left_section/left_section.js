import styles from '../../styles/Left.module.scss'
import { faColumns, faWallet, faMicrochip, faCog, faUserFriends, faHistory, faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeftSection = ()=>{

    return(
        <section className={styles.left}>
            <div className={styles.wrapper}>
                <section className={styles.user_sec}>
                    <h1>ADMIN</h1>
                    <div className={styles.user_logo}>
                        <img src='/images/icons8-person.png' alt='Admin Illustration'/>
                    </div>
                    <h2>Nehemiah</h2>
                    <p>Developer</p>
                </section>

                <section className={styles.list}>
                    <div className={styles.list_item}>
                        <FontAwesomeIcon icon={faColumns} />
                        <p>Dashboard</p>
                    </div>
                    <div  className={styles.list_item}>
                        <FontAwesomeIcon icon={faWallet}/>
                        <p>Balance</p>
                    </div>
                    <div  className={styles.list_item}>
                    <FontAwesomeIcon icon={faMicrochip}/>
                        <p>Transaction</p>
                    </div>
                    <div  className={styles.list_item}>
                        <FontAwesomeIcon icon={faUserFriends}/>
                        <p>Team</p>
                    </div>
                    <div  className={styles.list_item}>
                        <FontAwesomeIcon icon={faCog} />
                        <p>Setting</p>
                    </div>
                </section>
            </div>
            <section className={styles.history}>
                <div className={styles.sec_1}>
                    <FontAwesomeIcon icon={faHistory}/>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </div>
                <div className={styles.sec_2}>
                    <h3>History available</h3>
                </div>
                <div  className={styles.sec_3}>
                    <p>Check your weekly transaction reports</p>
                </div>
            </section>
        </section>
    )
}

export default LeftSection;