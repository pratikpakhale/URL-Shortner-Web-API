import React, { useEffect, useState } from 'react'

import validateURL from '../util/ValidateUrl'
import { postUrl } from '../requests/addURL'

function Input({ setAlert }) {
  const [urlInput, setUrlInput] = useState('')
  const [submitStatus, setSubmitStatus] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitBtnText, setSubmitBtnText] = useState('Generate')
  const [tooltip, setTooltip] = useState('copy')

  useEffect(() => {
    if (submitStatus) setSubmitBtnText('Generating')
    else if (!submitStatus && !submitSuccess) setSubmitBtnText('Generate')
    else if (submitSuccess) setSubmitBtnText('Generated')
  }, [submitStatus, submitSuccess])

  const inputOnClickHandler = e => {
    if (!submitSuccess) return

    e.target.select()
    document.execCommand('copy')
    setTooltip('copied')
  }

  const submitHandler = async e => {
    e.preventDefault()

    setSubmitStatus(true)

    if (!validateURL(urlInput)) {
      setSubmitStatus(false)
      setAlert('Invalid URL', 3)
      return
    }

    try {
      const response = await postUrl(urlInput)
      if (response.status === 200) {
        setUrlInput('tinyy.ml/' + response.id)

        setSubmitSuccess(true)
      } else {
        setAlert('Something went wrong', 4)
      }
    } catch (e) {
      setAlert(e.message, 4)
    }

    setSubmitStatus(false)
  }

  return (
    <>
      <span
        className='anchor'
        id='form'
        style={{ position: 'absolute', transform: 'translateY(-10vh)' }}
      ></span>
      <div className='card w-96 mx-auto bg-base-100 shadow-xl lg:w-1/2 my-10'>
        <div className='card-body w-full'>
          <h2 className='card-title'>Put the longg URL here!</h2>
          <form id='myForm' onSubmit={submitHandler}>
            <div
              className={`w-full my-10 inline-flex ${
                submitSuccess && 'tooltip'
              }`}
              data-tip={tooltip}
            >
              <input
                type='text'
                id='urlInput'
                placeholder='freecodecamp.org'
                className={`input input-bordered w-5/6 ${
                  submitSuccess && 'input-ghost'
                }`}
                value={urlInput}
                onChange={e => setUrlInput(e.target.value.trim())}
                onClick={inputOnClickHandler}
                required
                autoComplete='off'
              />
            </div>

            <div className='card-actions justify-end'>
              <button
                className={`btn btn-info opacity-80 text-md normal-case lg:uppercase ${
                  !submitStatus ? 'btn-outline' : 'loading'
                } ${submitSuccess && 'btn-disabled'}`}
                type='submit'
              >
                {submitBtnText}
              </button>
            </div>

            {/* <div className='card-actions justify-start mt-2'>
              <label className='label cursor-pointer'>
                <span className='label-text mx-2'>Custom </span>
                <input
                  type='checkbox'
                  className='toggle toggle-sm toggle-accent'
                />
              </label>
            </div> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Input
