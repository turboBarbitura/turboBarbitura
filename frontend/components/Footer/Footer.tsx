import React from 'react'
import styles from '../../styles/Components/Footer.module.scss'
import Contact from "../UI/contacts/Contact";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Contact description='© Михаил Щукин'/>
    </div>
  )
}

export default Footer