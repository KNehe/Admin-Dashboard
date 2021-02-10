import styles from '../../styles/Top.module.scss'
import { faBell, faCommentAlt, faGift , faCog, faSearch} from "@fortawesome/free-solid-svg-icons"
import TopSecIcon from '../top_sec_icon/top_sec_icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopSection = () =>{
    return(
        <section className={styles.top}>
          <h1>ADMIN</h1>
          <div className={styles.top_right}>
            <div className={styles.search_box}>
              <FontAwesomeIcon icon={faSearch}/>
              <input type='text' placeholder='Search'/>
            </div>
            <div className={styles.icon_list}>
              <TopSecIcon icon={faBell}/>
              <TopSecIcon icon={faCommentAlt}/> 
              <TopSecIcon icon={faGift}/>  
              <TopSecIcon icon={faCog}/>                  
            </div>
          </div>
        </section>
    )
}

export default TopSection;