import React from 'react'

function Title({ title }) {
  return (
    <div className='m-10'>
      {title.split(' ').map(word => (
        <kbd className='kbd mr-1' key={word}>
          {word}
        </kbd>
      ))}
      <kbd className='kbd'>▶︎</kbd>
    </div>
  )
}

export default Title
