import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {GiBrassKnuckles} from 'react-icons/gi'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>turboBarbitura</title>
        <meta name="description" content="street art person" />
        <link rel="icon" href='brass-knuckles.png' />
      </Head>
      
      
      <h1 className={styles.logo1}>Добро пожаловать в Но</h1> <GiBrassKnuckles className={styles.brassKnuckle}/>
      <h1>осибирск.</h1>
    </div>
  )
}

export default Home
