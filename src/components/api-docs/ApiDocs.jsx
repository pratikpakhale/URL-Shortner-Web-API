import React from 'react'
import Title from './Title'
import Code from './Code'

function ApiDocs() {
  return (
    <>
      <span
        className='anchor'
        id='APIdocs'
        style={{ position: 'absolute', transform: 'translateY(-10vh)' }}
      ></span>
      <div>
        <Title title={'API Endpoint'} />
        <Code code={`https://tinyy.ml/add`} patternBracket />

        <Title title={'cURL'} />
        <Code
          code={`curl --location --request POST 'http://tinyy.ml/add' \\ \n--header 'Content-Type: application/x-www-form-urlencoded' \\ \n--data-urlencode 'url=https://google.com'`}
        />

        <Title title={'Node.js'} />
        <Code
          code={`var myHeaders = new Headers();\nmyHeaders.append("Content-Type", "application/x-www-form-urlencoded");\nvar urlencoded = new URLSearchParams();\nurlencoded.append("url", "https://google.com");)\nvar requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };\nfetch("http://tinyy.ml/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));`}
        />

        <Title title={'Responses'} />
        <div className='flex flex-col w-full mx-auto lg:flex-row my-16'>
          <div className='grid flex-grow h-32 rounded-box place-items-center lg:w-5/6'>
            <Code
              code={`{\n"status": 200,\n"message": "Added Successfully",\n"id": "pratik"\n}`}
            />
          </div>
          <div className='divider lg:divider-horizontal my-10'>OR</div>
          <div className='grid flex-grow h-32 rounded-box place-items-center lg:w-5/6'>
            <Code
              code={`{\n"status": 406,\n"message": "URL validation failed: url: Invalid URL"\n}`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ApiDocs
