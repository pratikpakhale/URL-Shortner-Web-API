function NavEnd() {
  return (
    <div className='navbar-end'>
      <div className='tooltip tooltip-bottom' data-tip='creator'>
        <a
          className='btn btn-ghost btn-circle'
          href='https://www.twitter.com/_pratikpakhale'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='avatar online'>
            <div className='w-10 rounded-full'>
              <img
                src={process.env.PUBLIC_URL + 'public/twitter.png'}
                alt='twitter-logo'
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default NavEnd
