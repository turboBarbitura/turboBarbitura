import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'

import {SkillController} from './controllers/index.js'


//Создание приложения
const app = express()


//МогоДБ с рабочей почты
mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.e6wu8gr.mongodb.net/turbobarbitura?retryWrites=true&w=majority')
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB error', err))

//Учит приложения распознавать JSON
app.use(express.json())

//CORS учит приложения принимать запросы с ДРУГИХ локал хостов.
app.use(cors())



app.get('/', (req, res) => {
  res.send('turbobarbitura.ru')
})


//Получение скиллов
app.get('/hardSkills', SkillController.getAll)

//Создание скиллов
app.post('/hardSkills', SkillController.create)


//Слушать порт 8080. В случае ошибки вывести в консоль.
app.listen(8080, err => {
  if (err) {
    return console.log(err)
  }

  console.log('Server OK')
})

