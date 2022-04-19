import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Cv.module.css'
import Avatar from '../public/cv-avatar.jpg'
import { AiFillHome, AiFillPhone, AiFillMail, AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';


const Cv: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.sidebar}>
          <Image
            className={styles.avatar}
            src={Avatar}
            alt="avatar"
            layout="responsive"
          />
          <h1>Михаил Щукин</h1>
          <h3>Фронтенд разработчик</h3>

          <div className={styles.contacts}>


            {/* АДРЕС */}
            <div className={styles.contact}>
              <a href='https://yandex.ru/maps/-/CCUFYUtbgB' rel='noreferrer' 
                target='_blank'>
                <AiFillHome className={styles.icon}/> 
              </a>
              <a className={styles.link}  href='https://yandex.ru/maps/-/CCUFYUtbgB'>Новосибирск</a>
            </div>


            {/* ТЕЛЕФОН */}
            <div className={styles.contact}>
              <a href='tel:+79231145870'>
                <AiFillPhone className={styles.icon}/> 
              </a>
              <a className={styles.link} href='tel:+79231145870'>+7-923-114-58-70</a>
            </div>


            {/* ПОЧТА */}
            <div className={styles.contact}>
              <a href='mailto:mikhialxshchukin@gmail.com'>
                <AiFillMail className={styles.icon}/> 
              </a>
              <a className={styles.link} href='mailto:mikhialxshchukin@gmail.com'>mikhialxshchukin@gmail.com</a>
            </div>


            {/* ТЕЛЕГА */}
            <div className={styles.contact}>
              <a 
                href="https://t.me/turboBarbitura" 
                rel='noreferrer' 
                target='_blank'>
                <FaTelegram className={styles.icon}/> 
              </a>
              <a 
                className={styles.link} 
                href="https://t.me/turboBarbitura" 
                rel='noreferrer' 
                target='_blank'>
                  t.me/turboBarbitura
              </a>
            </div>


            {/* ГИТХАБ */}
            <div className={styles.contact}>
              <a 
                href="https://github.com/turboBarbitura" 
                rel='noreferrer' 
                target='_blank'>
                <AiFillGithub className={styles.icon}/> 
              </a>
              <a 
                className={styles.link} 
                href="https://github.com/turboBarbitura" 
                rel='noreferrer' 
                target='_blank'>
                  github.com/turboBarbitura
              </a>
            </div>
          </div>
        </div>
        <div className={styles.content}>
        HTML/CSS

Responsive Design

Bootstrap / Tailwind

JavaScript / ES6+

TypeScript

React / Redux

Redux Saga Toolkit

Next JS

Node JS
        </div>
      </div>
    </div>
  )
}

export default Cv
