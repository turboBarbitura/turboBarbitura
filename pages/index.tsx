import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {GiBrassKnuckles} from 'react-icons/gi'
import knuckles from '../public/knuckles-red.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>turboBarbitura</title>
        <meta name="description" content="street art person" />
        <link rel="icon" href='brass-knuckles.png' />
      </Head>
      
      
      <div className={styles.main}>
        <div>
          <h1 className={styles.logo1}>Добро пожаловать в</h1>
        </div>
         <div className={styles.secondItem}>
            <h1 className={styles.logo2}>Но</h1>
            <div className={styles.knuckle}>
             <Image className={styles.brassKnuckle} src={knuckles} alt='knuckles'/>
            </div>
            <h1 className={styles.logo3}>осибирск.</h1>
         </div>
      </div>

       

      {/* <GiBrassKnuckles className={styles.brassKnuckle}/> */}
    </div>
  )
}

export default Home
