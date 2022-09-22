import React, {useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from '../../styles/Components/Header.module.scss'
import Image from 'next/image';
import knuckles from '../../public/brass-knuckles.png';



const Header = () => {

  const [isResumeOpen, setIsResumeOpen] = React.useState(false)

  //Получаем доступ к текущей локации.
  const router = useRouter()

  //Если путь без домена включает /cv то будет условная отрисовка.
  useEffect(()=>{
    router.asPath.includes('/cv') ? setIsResumeOpen(true) : setIsResumeOpen(false)
  },[router])



  return (

    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <div className={styles.logo}>
            <div className={styles.knuckle}>
              <Image
                className={styles.brassKnuckle}
                src={knuckles}
                alt="knuckles"
              />
            </div>
            <h1 className={styles.logoTitle} >
              turboBarbitura
            </h1>
            <p className={styles.logoDescription}>{`<<Новосибирск изнутри`}</p>
          </div>
        </Link>
        <nav>
          <ul className={styles.navItems}>
            {/*<Link href='/admin'><li>Админка</li></Link>*/}
            {isResumeOpen ? <button><a href='Щукин Михаил.pdf' download>Скачать резюме(PDF)</a></button> : <Link href="/cv">
                  <li>Резюме</li>
              </Link>}

            <Link href="/about">
              <li>Об авторе</li>
            </Link>
            {/*<Link href='/register'><li>Создать аккаунт</li></Link>*/}
            {/*<Link href='/login'><li className={styles.login}>Войти</li></Link>*/}


          </ul>

        </nav>
      </div>
    </div>

  )
}

export default Header