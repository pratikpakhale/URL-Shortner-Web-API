const mongoose = require('mongoose')

const Link = new mongoose.Schema({
  id: { type: String, required: true, minlength: 4 },
  url: {
    type: String,
    validate: {
      validator: url => validURL(url),
      message: 'Invalid URL',
    },
  },
  views: { type: Number, min: 0 },
})

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

module.exports = mongoose.model('URL', Link)
