const express = require('express')
const Book = require('../models/book')

const router = express.Router()

router.get('/books', async (req, res) => {
  res.json({books:  await Book.find({})})
})

router.post('/books', (req, res) => {

  let {title} = req.body
  if (!title){
    res.statusCode = 400
    res.json({message: 'title is required'})
    return
  }
  try {
    const book = new Book(req.body);
    book.save();
    res.json(book);
  } catch (error) {
    throw new Error(error)
  }
})

router.delete('/books/:id', async (req, res)=>{
  try{
    await Book.findOneAndDelete({_id: req.params.id})
    res.json({success: true})

  }catch (e) {
    console.log(e)
    res.json({success: false})
  }
})

module.exports = router