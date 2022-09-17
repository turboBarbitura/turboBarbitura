import SkillModel from '../models/Skill.js'

//Создаём скилл
export const create = async (req, res) => {
  try {
    const doc = new SkillModel({
      name: req.body.name
    })

    const skill = await doc.save()


    res.json(skill)

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось создать скилл'
    })
  }
}


//Получение скиллов
export const getAll = async (req, res) => {
  try {
    const hardSkills = await SkillModel.find()
    res.json(hardSkills)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось получить скиллы'
    })
  }
}