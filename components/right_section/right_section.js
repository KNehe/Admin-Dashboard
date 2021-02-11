import styles from '../../styles/Right.module.scss'
import { faBell, faCommentAlt, faGift , faCog, faSearch} from "@fortawesome/free-solid-svg-icons"
import TopSecIcon from '../top_sec_icon/top_sec_icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopSection = () =>{
    return(
        <section className={styles.right}>
          <div className={styles.top}>
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