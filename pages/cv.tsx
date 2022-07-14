import {NextPage} from 'next';
import React from 'react';
import styles from '../styles/Cv.module.scss';
import CvSideBar from '../components/CV/CvSideBar';
import CvBody from '../components/CV/CvBody';
import Head from "next/head";

const Cv: NextPage = () => {
    console.log(new Date().getFullYear());

    return (
        <>
            <Head>
                <title>Мое резюме</title>
                <meta name="description" content="Резюме на вакансию фрнотенд дев"/>
                <link rel="icon" href="brass-knuckles.png"/>
            </Head>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <CvSideBar/>
                    <CvBody/>
                </div>
            </div>
        </>
    );
};

export default Cv;
