import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import RightSection from '../components/right_section/right_section'
import LeftSection from '../components/left_section/left_section'
import graphData from '../local_db/graph_data';

export default function Home({graphData}) {

  return (
    <div>
      <Head>
        <title>Nehe's Admin dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>       
        
        <LeftSection/>

        <RightSection data={graphData}/>
  
      </main>
    </div>
  )
}

export async function getStaticProps(){
 
  return {
    props:{
      graphData
    }
  }
}
