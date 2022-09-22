import { AiFillHome, AiFillPhone, AiFillMail, AiFillGithub } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';


//Получение актуального возраста
const getAge = require('get-age')
let currentAge = getAge('1986-05-06')

//Склонение возраста
function declinationAge(age) {
  let caseAge;
  let count = age % 100;
  if (count >= 5 && count <= 20) {
    caseAge = 'лет';
  } else {
    count = count % 10;
    if (count === 1) {
      caseAge = 'год';
    } else if (count >= 2 && count <= 4) {
      caseAge = 'года';
    } else {
      caseAge = 'лет';
    }
  }
  return caseAge;
}


export const hardSkills = [
  'HTML5/CSS3',
  'SASS/SCSS',
  'Responsive Design',
  'Bootstrap/Tailwind',
  'JavaScript / ES6+',
  'TypeScript',
  'React/Next JS',
  'Redux/Toolkit',
  'Node JS (Basic)',
  'WebPack (Basic)',
];



export const contacts = [
  {
    ico: <BsFillPersonFill />,
    description: `${currentAge} ${declinationAge(currentAge)}`,
  },
  {
    href: 'https://yandex.ru/maps/-/CCUFYUtbgB',
    ico: <AiFillHome />,
    description: 'Новосибирск',
  },
  {
    href: 'tel:+79231145870',
    ico: <AiFillPhone />,
    description: '+7-923-114-58-70',
  },
  {
    href: 'mailto:mikhialxshchukin@gmail.com',
    ico: <AiFillMail />,
    description: 'mikhialxshchukin@gmail.com',
  },
  {
    href: 'https://t.me/turboBarbitura',
    ico: <FaTelegram />,
    description: 't.me/turboBarbitura',
  },
  {
    href: 'https://github.com/turboBarbitura',
    ico: <AiFillGithub />,
    description: 'github.com/turboBarbitura',
  },
];
