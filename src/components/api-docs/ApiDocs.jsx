import React from 'react'
import Title from './Title'
import Code from './Code'
import TwitterSVG from '../svgs/TwitterSVG'

function ApiDocs() {
  const TwitterDmText = encodeURIComponent(
    `Hey Pratik,\nI had some suggestions regarding tinyy.ml\n\nSuggestions:\n`
  )

  return (
    <>
      <div>
        <Title title={'API Endpoint'} />
        <Code code={`https://tinyy.ml/add`} patternBracket />

        <Title title={'cURL'} />
        <Code
          code={`curl --location --request POST 'http://tinyy.ml/add' \\ \n--header 'Content-Type: application/x-www-form-urlencoded' \\ \n--data-urlencode 'url=https://google.com'`}
        />

        <Title title={'JavaScript'} />
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

        <Title title={'Get Public Metrics by ID'} />
        <Code
          code={`var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };\nfetch("tinyy.ml/views/:id", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));`}
        />
      </div>

      <a
        href={`https://www.postman.com/pakhalepratik/workspace/tinyy`}
        className='twitter-dm-button btn btn-outline border-postman text-postman m-10 align-middle hover:bg-postman hover:text-white hover:border-postman'
        target='_blank'
        rel='noopener noreferrer'
      >
        View in Postman
      </a>
      <a
        href={`https://twitter.com/messages/compose?recipient_id=1132236270002851842&text=${TwitterDmText}`}
        className='twitter-dm-button btn btn-outline btn-info my-10 align-middle'
        target='_blank'
        rel='noopener noreferrer'
        data-screen-name='@_pratikpakhale'
      >
        Direct Contact &nbsp;&nbsp; <TwitterSVG />
      </a>
    </>
  )
}

export default ApiDocs
