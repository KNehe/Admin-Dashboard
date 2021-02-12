import styles from '../../styles/Activity.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RecentActivity = ({icon, currency}) =>{
    return(
        <div className={styles.activity}>
        <div className={styles.activity_icon}>
          <FontAwesomeIcon icon={icon}/>
        </div>
        <p>{currency}</p>
        <p>{
          new Date().getDate() + ':'+
          new Date().getMonth() + ':' +
          new Date().getFullYear() 
          }
          { new Date().getHours() >= 12 ? ' pm' : ' am' }
        </p>
        <p>Completed</p>
      </div>        
    )
}

export default RecentActivity;