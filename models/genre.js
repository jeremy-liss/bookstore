const mongoose = require('mongoose')

//genre schema

const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

const Genre = module.exports = mongoose.model('Genre', genreSchema)

module.exports.getGenres = (callback, limit) => {
  Genre.find(callback).limit(limit)
}

module.exports.addGenre = (genre, callback) => {
  Genre.create(genre, callback)
}

module.exports.updateGenre = (id, genre, options, callback) => {
  const query ={_id: id}
  const update = {
    name: genre.name
  }
  Genre.findOneAndUpdate(query, update, options, callback)
}
