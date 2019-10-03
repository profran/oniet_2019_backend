const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const fs = require('fs')

let transaction = []

fs.readFile('data.json', (err, data) => {
  if (err) throw err
  transaction = JSON.parse(data)
  console.log(transaction)
})

app.use(logger('dev'))

app.use(bodyParser.json({ extended: true }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

const router = express.Router()

router.get('/', (req, res, next) => {
  if (req.query.userId === '') {
    res.json(transaction)
  } else {
    res.json(transaction.filter((item) => item.user_id === req.query.userId))
  }
})

router.get('/cruces', (req, res, next) => {
  console.log(Object.keys(req.query)[1])
  res.json(transaction.filter((item) => item.user_id !== req.query.userId && item[Object.keys(req.query)[1]] === req.query[Object.keys(req.query)[1]]))
})

app.use('/data', router)

app.use(function (err, req, res, next) {
  console.log(err)

  res.status(404).json({ message: 'Not found' })
})

app.listen(3002, function () {
  console.log('Node server listening on port 3002')
})
