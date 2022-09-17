import {NextPage} from 'next';
import React from 'react';
import styles from '../styles/Components/CV/Cv.module.scss';
import CvSideBar from '../components/CV/CvSideBar';
import CvBody from '../components/CV/CvBody';
import Head from "next/head";
import jsPDF from 'jspdf';

const Cv: NextPage = () => {

  //Хендлер на скачивание PDF формы резюме
  const download = () => {
    const doc = new jsPDF('p', 'pt', 'a4')

    // @ts-ignore
    doc.html(document.querySelector('#capture'), {
      callback: (pdf) =>{
        pdf.save('cv.pdf')
      },
      width: 500,
      windowWidth: 800,

    })

    console.log('Скачиваю')
  }

  return (
    <>
      <Head>
        <title>Мое резюме</title>
        <meta name="description" content="Резюме на вакансию фронтенд дев"/>
        <link rel="icon" href="brass-knuckles.png"/>
      </Head>
      <div className={styles.container}>
        <div className={styles.contentWrapper} id='capture'>
          <CvSideBar/>
          <CvBody/>
        </div>
        {/*Кнопка скачивания PDF формы резюме*/}
        {/*<button onClick={download}>Скачать PDF</button>*/}
      </div>
    </>
  );
};

export default Cv;
