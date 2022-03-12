import MenuSVG from '../svgs/MenuSVG'

function NavStart() {
  return (
    <div className='navbar-start'>
      <div className='dropdown'>
        <button className='btn btn-ghost btn-circle' id='menuBtn'>
          <MenuSVG />
        </button>
        <ul
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 fixed'
          id='menuList'
        >
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#APIdocs'>API Ref</a>
          </li>
          <li>
            <a href='https://github.com/pratikpakhale/url-shortner-web-api'>
              Git Repo
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavStart
