import React from 'react'

function Code({ code, patternBracket }) {
  return (
    <div className='mockup-code w-5/6 mx-auto lg:w-4/6'>
      {code.split('\n').map((codeline, index) => (
        <pre data-prefix={patternBracket ? '>' : index + 1} key={index}>
          <code>{codeline}</code>
        </pre>
      ))}
    </div>
  )
}

export default Code
