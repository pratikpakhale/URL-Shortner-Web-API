import React, { useState, useEffect } from 'react'
import { getCount } from '../requests/getCount'

function Stats() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function loadStats() {
      setCount(await getCount())
    }
    loadStats()
  }, [])

  return (
    <div className='card w-96 bg-base-100 shadow-xl mx-auto mb-10'>
      <div className='card-body'>
        <h2 className='card-title'>Stats!</h2>
        <p>
          So far we've created&nbsp;
          <span id='statValue' className='text-tinyy text-xl'>
            {count}
          </span>
          &nbsp;links for our users since 8 march, 2022
        </p>
      </div>
    </div>
  )
}

export default Stats
