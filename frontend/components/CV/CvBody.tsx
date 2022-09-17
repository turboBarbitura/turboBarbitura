import React from 'react';
import styles from '../../styles/Components/CV/CvBody.module.scss';

const CvBody = () => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>

        <div className={styles.summaryBlock}>
          <div className={styles.decoration}></div>
          <div className={styles.description}>
            <h2>О себе:</h2>
            Огромный опыт работы в команде.
            Лидирование рабочих групп по различным кейсам: решению
            технических проблем, оптимизации работы оборудования, сокращению перерасходов, экономии
            ресурсов. Активное участие в проектах по расширению мощностей фабрики. Создание документации
            для нового оборудования и обучение сотрудников. Многократное присвоение статуса “выше
            стандарта” за участие в программе развития фабрики. 8 лет подряд моя команда набирает 90ый
            процентиль по результатам опроса вовлеченности Gall Up. Планирование рабочего дня и
            поставленных задач. Стрессоустойчивость.
          </div>
        </div>
        <div className={styles.summaryBlock}>
          <span className={styles.decoration}></span>
          <div className={styles.description}>
            <h2>Опыт работы:</h2>
            ООО “МАРС” с 2008 года.
            <ul>
              <li>Ведущий специалист производственного участка.</li>
              <li>Исполняющий обязанности начальника производства <br/> (в подчинение 22+ человека).</li>
            </ul>


          </div>

        </div>
        <div className={styles.summaryBlock}>
          <div className={styles.decoration}></div>
          <div className={styles.description}>
            <h2>Образование:</h2>
            Новосибирский Государственный Аграрный Университет. <br/> Инженерный институт (2004-2009).
            <br/>
            Инженер. Автомобили и автомобильное хозяйство.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvBody;
