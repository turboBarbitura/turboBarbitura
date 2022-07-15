import { AiFillHome, AiFillPhone, AiFillMail, AiFillGithub } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';

export const hardSkills = [
  'HTML5',
  'CSS3',
  'SASS/SCSS',
  'Responsive Design',
  'Bootstrap',
  'Tailwind',
  'JavaScript / ES6+',
  'TypeScript',
  'React',
  'Redux',
  'Redux Saga/Toolkit',
  'Next JS',
  'Node JS',
  'WebPack',
];

export const contacts = [
  {
    ico: <BsFillPersonFill />,
    description: `${new Date().getFullYear() - 1986} лет`,
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
