//Creating the Postman endpoint for POST where we want to add a new class function

import mongoose from 'mongoose';
import { classSchema } from '../models/danceClassModel'
const Classes = mongoose.model('Classes', classSchema);
export const addNewClass = (req,res) => {
  let newClass = new Classes(req.body);
  newClass.save((err, Classes) => {
    if (err) {
      res.send(err)
    }
    res.json(Classes)
  })
}
