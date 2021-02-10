import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import TopSection from '../components/top_section/top'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nehe's Admin dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TopSection />    
      </main>
    </div>
  )
}
