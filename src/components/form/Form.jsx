import { useState } from 'react'
import React from 'react'
import Alert from './Alert'
import Input from './Input'

function Form() {
  const [alertStatus, setAlertStatus] = useState({
    message: '',
    isActive: false,
  })

  const alertHandler = (message, timeout) => {
    setAlertStatus({ message, isActive: true })
    setTimeout(() => {
      setAlertStatus({ message: '', isActive: false })
    }, timeout * 1000)
  }

  return (
    <>
      <Alert message={alertStatus.message} isActive={alertStatus.isActive} />
      <Input setAlert={alertHandler} />
    </>
  )
}

export default Form
