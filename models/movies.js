const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  summary: String,
  rated: String,
  imageMain: String,
  image1: String,
  image2: String,
  image3: String
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
