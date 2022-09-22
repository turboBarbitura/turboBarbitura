import React from 'react';
import styles from '../../styles/Components/CV/CvBody.module.scss';
import Image from 'next/image';
import Achievement from '../../public/achievement2015.jpg';

const CvBody = () => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>

        <div className={styles.summaryBlock}>
          <div className={styles.decoration}></div>
          <div className={styles.description}>
            <h2>О себе:</h2>
            <div className={styles.descriptionWithImageBlock}>
              <div className={styles.descriptionWithImage}>
                Огромный опыт работы в команде.
                <br/>
                <br/>
                Лидирование рабочих групп по различным кейсам:

                <li>повторяющиеся технические проблемы</li>
                <li>оптимизация работы оборудования</li>
                <li>сокращение перерасходов</li>
                <li>экономия ресурсов</li>
                <li>безопасность сотрудников</li>

                <br/>

              </div>
              <div className={styles.descriptionImage}>
                <Image className={styles.achieve} src={Achievement} alt="avatar" layout="responsive"/>
              </div>
            </div>

            Активное участие в проектах по расширению мощностей фабрики.
            <br/>
            <br/>
            Поддержка других отделов и полное сопровождение процессов внедрения новых технологий.
            <br/>
            <br/>
            Создание документации для нового оборудования и обучение сотрудников.
            <br/>
            <br/>
            Многократное присвоение статуса “выше
            стандарта” за участие в программе развития фабрики.
            <br/>
            <br/>
            8 лет подряд моя команда набирает 90ый+
            процентиль по результатам опроса вовлеченности Gall Up.

          </div>
        </div>
        <div className={styles.summaryBlock}>
          <span className={styles.decoration}></span>
          <div className={styles.description}>
            <h2>Опыт работы:</h2>
            ООО “МАРС” с 2008 года.
            <ul>
              <li>Ведущий специалист производственного участка.</li>
              <li>Исполняющий обязанности начальника производства <br/> (в подчинении 22+ человека).</li>
            </ul>


          </div>

        </div>
        <div className={styles.summaryBlock}>
          <div className={styles.decoration}></div>
          <div className={styles.description}>
            <h2>Образование:</h2>
            Новосибирский Государственный Аграрный Университет. <br/> Инженерный институт (2004-2009).
            <br/>
            <br/>
            Инженер. Автомобили и автомобильное хозяйство.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvBody;
