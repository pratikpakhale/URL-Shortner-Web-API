import Actions from './Actions'

function Hero() {
  return (
    <div className='hero h-5/6 bg-base-200 mb-10'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-4xl font-bold'>Heyy :D</h1>
          <p className='py-6'>
            tiNyy provides you a short URL of long links and makes them easy to
            share!
            <br /> For Developers, you can also use our API. Check the docs
            below or you can refer to the github repo from the menu!
          </p>
          <Actions />
        </div>
      </div>
    </div>
  )
}

export default Hero
