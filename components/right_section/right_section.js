import styles from '../../styles/Right.module.scss'
import { faBell, faCommentAlt, faGift , faCog, faSearch, faSortAmountDownAlt, faBold, faEllipsisV, faMoneyCheck, faNetworkWired, faArrowDown, faArrowUp, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import TopSecIcon from '../top_sec_icon/top_sec_icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatCard from '../../components/stat_card/stat_card'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import RecentActivity from '../recent_activity/recent_activity';
import { useState } from 'react'
import LeftSectionSM from '../left_section/left_section_small.device';

const RightSection = () =>{

  const data = [
    {
      name: 'Mon',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Tue',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Wed',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Thur',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Fri',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Sat',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Sun',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  
  const [leftSecStyles, setLeftSectionStyles ] = useState({
    transform:'translateX(-300px)'
  });

  const [backDropStyles, setbackDropStyles] = useState({
    transform:'translateX(-3000px)'
  });

  const onHumbergerClickedHandler = event =>{
    event.preventDefault();
      setLeftSectionStyles({
        transform:'translateX(0px)'
      });
  
      setbackDropStyles({
          transform:'translateX(0px)'
        });
    }

  const onBackdropClickedHandler = event =>{
    event.preventDefault();
      setLeftSectionStyles({
        transform:'translateX(-300px)'
      });  
      
      setbackDropStyles({
        transform:'translateX(-3000px)',
        visibility: 'hidden'
      });
  }


    return(
      <>
      { 
        <LeftSectionSM 
          leftSecStyles={leftSecStyles}
          onBackDropClicked={onBackdropClickedHandler}
          backDropStyles={backDropStyles}
        />
      }
       <section className={styles.right}>

      <div className={styles.top}>
        <div className={styles.humberger_icon}   onClick={onHumbergerClickedHandler}>
          <div className={styles.line_1}></div>
          <div className={styles.line_2}></div>
          <div className={styles.line_3}></div>
        </div>
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
        
        <section className={styles.bottom_section}>
        
          <div className={styles.chart_section}>
            <div className={styles.chart_sec_header}>
              <div className={styles.chart_title}>
                <h3>Market overview - <span className={styles.span}> Price value updates</span></h3>
              </div>

              <div className={styles.drop_down}>
                <p>Weekly ({new Date().getFullYear()})  
                </p>
              </div>
            </div>
          
              <ResponsiveContainer height='85%'>
                <LineChart data={data}>
                  <Line type="monotone" dataKey="uv" stroke="#fff" />
                  <CartesianGrid stroke="#646466"/>
                  <XAxis dataKey='name'  stroke="#fff" axisLine={{ stroke: '#646466' }} />
                  <YAxis stroke='#fff' axisLine={{ stroke: '#646466' }} />
                </LineChart>
              </ResponsiveContainer>
          </div>
          
          <div className={styles.recent_activities}>
            <h4>Recent Activities</h4>
            <RecentActivity 
              icon={faArrowUp}
              currency={'Shillings'}
            /> 
            <RecentActivity 
              icon={faArrowRight}
              currency={'Bitcoin'}
            />  
            <RecentActivity 
              icon={faArrowDown}
              currency={'USD'}
            />                       
          </div>
      </section>

      </section>

      </section>

      </>
       
    )
}

export default RightSection;