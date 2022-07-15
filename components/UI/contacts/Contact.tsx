import React from 'react';
import styles from './Contact.module.css';
import { ContactProps } from './Contact.props';

const Contact = (props: ContactProps) => {
  return (
    <div className={styles.contact}>
      <a href={props.href} rel="noreferrer" target="_blank">
        <span className={styles.icon}>{props.ico}</span>
      </a>
      <a className={styles.link} href={props.href} rel="noreferrer" target="_blank">
        {props.description}
      </a>
    </div>
  );
};

export default Contact;

