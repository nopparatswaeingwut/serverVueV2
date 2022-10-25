const mongoose = require('mongoose');
const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    Name: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    },
    details: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    },
    age: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    },
    hobby: {
      type: String,
      required: 'ไม่สามารถเว้นว่างได้'
    }
    
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);