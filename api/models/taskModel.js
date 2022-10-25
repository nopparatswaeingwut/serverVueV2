const mongoose = require('mongoose');
const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    task1: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    },
    task2: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    },
    task3: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    },
    task4: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    }
    
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);