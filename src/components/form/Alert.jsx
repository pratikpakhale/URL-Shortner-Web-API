import React from 'react'
import AlertCrossSVG from '../svgs/AlertCrossSVG'

function Alert({ message, isActive }) {
  return (
    <div
      className={`alert alert-error shadow-lg w-5/6 mx-auto lg:w-4/6 ${
        !isActive && 'hidden'
      }`}
      id='alert'
    >
      <div>
        <AlertCrossSVG />
        <span id='alertText'>{message}</span>
      </div>
    </div>
  )
}

export default Alert
