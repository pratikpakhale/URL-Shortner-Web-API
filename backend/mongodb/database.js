const URL = require('./mongoose')

const ID_LENGTH = 6

const addURL = async url => {
  try {
    const ID = generateID()

    const tempData = await URL.find({ url: url })

    if (tempData.length !== 0) {
      return {
        status: 200,
        message: 'Added Successfully',
        id: tempData[tempData.length - 1].id,
      }
    }

    await URL.create({
      id: ID,
      url: url,
      views: 0,
    })

    return { status: 200, message: 'Added Successfully', id: ID }
  } catch (e) {
    return {
      status: 406,
      message: e.message,
    }
  }
}

const getURL = async id => {
  try {
    const urlData = await URL.find({ id: id })
    if (urlData.length === 0 || urlData === null || urlData === undefined)
      return {
        status: 404,
        message: 'Url Not Found',
      }

    const lastElem = urlData[urlData.length - 1] // as urlData contains a array of matching ids
    await updateViews(lastElem)
    return lastElem.url
  } catch (e) {
    return {
      status: 406,
      message: e.message,
    }
  }
}

const getCount = async () => {
  try {
    const count = await URL.find().count()
    if (count || count === 0) return { count: count }
    else
      return {
        status: 502,
        message: 'Something went wrong',
      }
  } catch (e) {
    return {
      status: 502,
      message: e.message,
    }
  }
}

const updateViews = async urlData => {
  if (!urlData.id) return

  await URL.findByIdAndUpdate(
    urlData._id,
    { $inc: { views: 1 } },
    { upsert: true }
  )
}

const getViews = async id => {
  try {
    let urlData = await URL.find({ id: id })
    urlData = urlData[urlData.length - 1]

    if (
      urlData === '' ||
      !urlData ||
      urlData === null ||
      urlData === undefined ||
      !urlData.views
    ) {
      return {
        status: 404,
        message: 'Url Not Found',
      }
    }

    return { status: 200, views: urlData.views }
  } catch (e) {
    return {
      status: 406,
      message: e.message,
    }
  }
}

function generateID() {
  const randomChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < ID_LENGTH; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
  }
  return result
}

module.exports = {
  addURL,
  getURL,
  getCount,
  getViews,
}
