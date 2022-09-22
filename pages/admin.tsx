import React, {useEffect, useRef, useState} from 'react';
import {NextPage} from "next";
import style from '../styles/admin.module.scss'
import axios from "axios";


const Admin: NextPage = () => {

  //Состояние для массива уже имеющихся скиллов
  const [skills, setSkills] = useState<string[]>([])
  const [changeInput, setChangInput] = useState('')

  //Получаем массив уже имеющихся скиллов
  useEffect(() => {
    axios.get('http://localhost:8080/hardskills').then(res => {
      setSkills(res.data)
    })

  }, [changeInput])

  //Формируем массив уже приобретенных навыков на основании полученных с сервера данных.
  //Для сравнения с новым навыком.
  const acquiredSkills = skills.map((skill:any) => skill.name)

  //Реф на инпут
  const inputRef = useRef<HTMLInputElement>(null)

  //Добавление нового скилла
  const addSkill = () => {
    const newSkill: any = inputRef.current?.value
    //Сравниваем новый навык с уже приобретенными.
    if (acquiredSkills.includes(newSkill)) {
      alert('Вы уже прокачали данный скилл ранее')
    } else {
      //Если новый навык уникален, добавляем его в базу данных.
      axios.post('http://localhost:8080/hardskills', {
        name: `${newSkill}`,
      }).then(() => alert(`Скилл ${newSkill} добавлен в ваш список хард скиллов. Поздравляю!`) )

    }
    //Сбрасываем велью инпута.
    if (inputRef.current?.value) {
      inputRef.current.value = ''
    }

  }

  return (
    <div className={style.container}>
      <h1>Панель администратора</h1>

      <input ref={inputRef} onChange={(e)=>setChangInput(e.target.value)} type="text"/>
      <button onClick={addSkill}>Добавить скилл</button>
    </div>
  );
};

export default Admin;