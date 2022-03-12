const getCount = async () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }

  const response = await fetch('/count', requestOptions)
  const result = await response.json()
  if (result.count) {
    return result.count
  } else {
    return 0
  }
}

export { getCount }
