const express = require('express')
const bodyParser = require('body-parser')
const serverless = require('serverless-http')
var cors = require('cors')

const db = require('../mongodb/database')

const app = express()
// const port = 3000

app.use(cors())

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  try {
    if (req.params.id === '') {
      return
    }
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null

    const response = await db.getURL(req.params.id, ip)

    if (validURL(response)) {
      if (!response.includes('http://') && !response.includes('https://'))
        res.redirect(`https://${response}`)
      else {
        res.redirect(response)
      }
    }
  } catch (e) {
    res.send(e.message)
  }

  next()
})

router.get('/count', async (req, res, next) => {
  try {
    const response = await db.getCount()
    res.send(response)
  } catch (e) {
    res.send({
      status: 500,
      message: e.mesage,
    })
  }

  next()
})

router.get('/views/:id', async (req, res, next) => {
  try {
    const response = await db.getViews(req.params.id)

    if (!response.status)
      res.send({ status: 500, message: 'Something went wrong!' })

    res.send(response)
  } catch (e) {
    res.send({ status: 500, message: e.message })
  }
})

router.post('/add', async (req, res) => {
  try {
    if (req.body.url) {
      const response = await db.addURL(req.body.url)
      res.send(response)
    } else {
      res.send({ status: 406, message: 'Invalid format of req' })
    }
  } catch (e) {
    res.send(e.message)
  }
})

app.use('/', router)

function validURL(url) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(url)
}

// app.listen(port)
module.exports.handler = serverless(app)
