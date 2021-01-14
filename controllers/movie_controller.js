const express = require("express")
const movies = express.Router()

const Movies = require("../models/movies.js")

movies.get ("/", (req, res) => {
    Movies.find({}, (err, foundMovies) => {
        res.json(foundMovies)
    })
})

movies.post("/", (req, res) => {
    Movie.create(req.body, (err, createMovie) => {
        Movie.find({}, (err, foundMovies) => {
            res.json(foundMovies)
        })
    })
})

movies.put("/:id", (req, res) => {
    Movie.findByIdAndUpdate(
      req.params.id, req.body, { new: true },(err, updatedMovie) => {
        if (err) {
          console.log(err);
        } else {
          Movie.find({}, (err, updatedMovie) => {
            res.json(updatedMovie)
          })
        }
      }
    )
  })

  movies.delete("/:id", (req, res) => {
      Movie.findByIdAndRemove(req.params.id, (err, deleteMovie) => {
          Movie.find({}, (err, foundMovies) => {
              res.json(foundMovies)
          })
      })
  })


module.exports = movies