import styles from '../../styles/Right.module.scss'
import { faBell, faCommentAlt, faGift , faCog, faSearch, faSortAmountDownAlt, faBold, faBlog, faBolt, faEllipsisV, faCrown, faPortrait, faMoneyBillAlt, faMobile, faMoneyCheck, faNetworkWired} from "@fortawesome/free-solid-svg-icons"
import TopSecIcon from '../top_sec_icon/top_sec_icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatCard from '../../components/stat_card/stat_card'

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
          
          <section className={styles.menu_item_content}>

            <article className={styles.title_sec}>
              <h1>Dashboard</h1>
              <div className={styles.filter_div}>
                <p>Filters</p>
                <FontAwesomeIcon icon={faSortAmountDownAlt}/>
              </div>
            </article>

            <section className={styles.stats_card_list}>
              <StatCard
                icon1={faBold}
                icon2={faEllipsisV}
                amount={'$1200'}
                percentage={'27'}
                graphic={'/svg/ic.svg'}
              />
               <StatCard
                icon1={faMoneyCheck}
                icon2={faEllipsisV}
                amount={'$232,40'}
                percentage={'35'}
                
              />
               <StatCard
                icon1={faNetworkWired}
                icon2={faEllipsisV}
                amount={'600'}
                percentage={'21'}
                graphic={'/svg/ib.svg'}
              />
            </section>

          </section>
        </section>
    )
}

export default TopSection;