import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import knuckles from '../public/knuckles-red.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>turboBarbitura</title>
        <meta name="description" content="street art person" />
        <link rel="icon" href="brass-knuckles.png" />
      </Head>

      <div className={styles.main}>
        <div>
          <h1 className={styles.logo}>Добро пожаловать в Но &nbsp;&nbsp; осибирск.</h1>
          <p className={styles.description}>На данный момент сайт находится в разработке... </p>
        </div>
        <div className={styles.knuckle}>
          <Image
            className={styles.brassKnuckle}
            src={knuckles}
            alt="knuckles"
          />
        </div>
      </div>


    </div>
  )
}

export default Home
