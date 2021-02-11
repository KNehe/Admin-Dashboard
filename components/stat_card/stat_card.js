import styles from '../../styles/StatCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StatCard = ({icon1, icon2, amount, percentage, graphic})=>{
    return(
        <div className={styles.stat_card}>
        <div className={styles.stat_icons}>
          <div className={styles.stat_icon_bold}>
            <FontAwesomeIcon icon={icon1}/>
          </div>
          <FontAwesomeIcon icon={icon2}/>
        </div>

        <div className={styles.stats_row}>
          <p>{amount}</p>
          {graphic != null ?
          <img src={graphic} alt='statistics graph illustration' />
          : null
          }
        </div>

        <p>{percentage}% This week</p>

      </div>
    
    )
}

export default StatCard;