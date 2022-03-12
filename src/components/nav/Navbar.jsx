import NavStart from './NavStart'
import NavTitle from './NavTitle'
import NavEnd from './NavEnd'

function Navbar() {
  return (
    <nav className='navbar bg-base-100 drop-shadow rounded-box'>
      <NavStart />
      <NavTitle />
      <NavEnd />
    </nav>
  )
}

export default Navbar
