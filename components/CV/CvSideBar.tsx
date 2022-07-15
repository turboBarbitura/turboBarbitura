import React from 'react';
import styles from '../../styles/CvSideBar.module.css';
import Image from 'next/image';
import { hardSkills, contacts } from '../../data/skills';
import Contact from '../UI/contacts/Contact';
import Avatar from '../../public/cv-avatar.jpg';

const CvSideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Image className={styles.avatar} src={Avatar} alt="avatar" layout="responsive" />
      <h1 className={styles.h1}>Михаил Щукин</h1>
      <h3 className={styles.h3}>Фронтенд разработчик</h3>
      <hr className={styles.hr} />

      <div className={styles.contacts}>
        {contacts.map((contact, i) => (
          <Contact {...contact} key={i} />
        ))}
      </div>
      <hr className={styles.hr} />
      <h3>Стек технологий</h3>
      <div className={styles.hardSkills}>
        {hardSkills.map((skill, i) => (
          <p className={styles.skill} key={i}>{`${skill} `}</p>
        ))}
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default CvSideBar;
