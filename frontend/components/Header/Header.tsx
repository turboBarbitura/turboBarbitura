import React from 'react'
import Link from "next/link";

import styles from './Header.module.scss'


const Header = () => {
    return (

        <div className={styles.header}>
            <div className={styles.wrapper}>
                <Link href='/'>
                <h1 className={styles.logo}>
                    turboBarbitura
                </h1>
                </Link>
                <nav>
                    <ul className={styles.navItems}>
                        <Link href='/admin'><li>Админка</li></Link>
                        <Link href='/cv'><li>Резюме</li></Link>
                        <Link href='/about'><li>Об авторе</li></Link>
                        <Link href='/register'><li>Создать аккаунт</li></Link>
                        <Link href='/login'><li className={styles.login}>Войти</li></Link>


                    </ul>

                </nav>
            </div>
        </div>

    )
}

export default Header