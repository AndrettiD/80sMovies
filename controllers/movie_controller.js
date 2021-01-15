const express = require("express")
const movies = express.Router()

const Movies = require("../models/movies.js")

movies.get ("/", (req, res) => {
    Movies.find({}, (err, foundMovies) => {
        res.json(foundMovies)
    })
})

movies.post("/", (req, res) => {
    Movies.create(req.body, (err, createMovies) => {
        Movies.find({}, (err, foundMovies) => {
            res.json(foundMovies)
        })
    })
})

movies.put("/:id", (req, res) => {
    Movies.findByIdAndUpdate(
      req.params.id, req.body, { new: true },(err, updatedMovies) => {
        if (err) {
          console.log(err);
        } else {
          Movies.find({}, (err, updatedMovies) => {
            res.json(updatedMovies)
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