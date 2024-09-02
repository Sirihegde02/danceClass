//Setting up the schema for danceClassDB:
//I want the songName, classFee, classDesc, classDate, classCreationDate, classDuration, classTime
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const classSchema = new Schema({
  songName: {
    type: String,
    required: "Enter song name"
  },
  classFee: {
    type: Number,
    required: "Enter fee for class",
    min: [0, 'Class fee must be a positive number']
  },
  classDesc: {
    type: String,
    required: "Enter class description"
  },
  classDate: {
    type: Date,
    required: "Enter class date",
    index: true
  },
  classTime: {
    type: String,
    required: "Enter class time"
  },
  classDuration: {
    type: Number,
    required: "Enter class duration (mins)",
    min: [1, 'Class duration must be at least 1 minute']
  },
  classCreationDate: {
    type: Date,
    default: Date.now
  }
});

export const Class = mongoose.model('Class', classSchema);