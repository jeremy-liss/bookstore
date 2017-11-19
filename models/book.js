const mongoose = require('mongoose')

//book schema

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

const Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit)
}

module.exports.getBookById = (id, callback) => {
  Book.findById(id, callback)
}

module.exports.addBook = (book, callback) => {
  Book.create(book, callback)
}

module.exports.updateBook = (id, book, options, callback) => {
  const query ={_id: id}
  const update = {
    title: book.title,
    genre: book.genre,
    author: book.author,
    description: book.description,
    publisher: book.publisher,
    pages: book.pages
  }
  Book.findOneAndUpdate(query, update, options, callback)
}
