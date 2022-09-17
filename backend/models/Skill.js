import mongoose from "mongoose";

//Создаём модель скилла
const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true //Name - будет обязательным полем
  },

  //В планах добавить прогресс бар
}, {
  timestamps: true //Дата и время создания
})


export default mongoose.model('hardSkill', SkillSchema)