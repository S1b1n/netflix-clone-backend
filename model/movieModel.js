const mongoose = require('mongoose');
const category = require('./categoryModel');
const Schema=mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  categories:{
   type:mongoose.Types.ObjectId,
   required:true,
   ref:"category"
  }
})
const Movie = mongoose.model('Movie', movieSchema);



module.exports = Movie
