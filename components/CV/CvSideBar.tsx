import React, {useEffect, useState} from 'react';
import styles from '../../styles/Components/CV/CvSideBar.module.scss';
import Image from 'next/image';
import {contacts, hardSkills} from '../../data/skills';
import Contact from '../UI/contacts/Contact';
import Avatar from '../../public/cv-avatar.jpg';
import axios from 'axios';

const CvSideBar = () => {

  //Состояние для массива скиллов
  // const [skills, setSkills] = useState([])

  //Получаем массив скиллов с сервера
  // useEffect(() => {
  //   axios.get('http://localhost:8080/hardskills').then(res => {
  //     setSkills(res.data)
  //   })
  //
  // }, [])


  return (
    <div className={styles.sidebar}>
      <div className={styles.sideBarBlockMain}>
        <div className={styles.sideBarBlock}>
          <div className={styles.avatar}>
            <Image className={styles.avatar} src={Avatar} alt="avatar" layout="responsive"/>
          </div>
          <h1 className={styles.h1}>Михаил Щукин</h1>
          <h3 className={styles.h3}>Фронтенд разработчик</h3>
          <hr className={styles.hr}/>
        </div>

        <div className={styles.sideBarBlock}>
          <div className={styles.contacts}>
            {contacts.map((contact, i) => (
              <Contact {...contact} key={i}/>
            ))}
          </div>
          <hr className={styles.hr}/>
        </div>
      </div>

      <div className={styles.sideBarBlockHardSkills}>
        <div className={styles.sideBarBlock}>
          <h3>Стек технологий</h3>
          <div className={styles.hardSkills}>
            {hardSkills.map((skill: any, i) => (
              <div className={styles.hardSkill} key={i}>


                {/*Полученные с бекенда хардскиллы*/}
                {/*<p className={styles.skill} >{`${skill.name} `}</p>*/}


                <p className={styles.skill} >{skill}</p>

                {/*Блок для редактирования и удаления скиллов*/}
                {/*<div className={styles.skillModification}>*/}
                {/*  <span>R</span>*/}
                {/*  <span>D</span>*/}
                {/*</div>*/}
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvSideBar;
