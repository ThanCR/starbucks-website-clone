import './NavBar.css';
import LogoURL from '../../static/nav-bar-logo.png'
import { IoMdPin } from 'react-icons/io'

function NavBar() {
  const imageStyles = {
    'width': '50px',
    'height': '50px',
  }
  return (
    <div className="NavBar">
      <img src={LogoURL} alt='starbucks' style={imageStyles} />
      <section className='left-navbar-side'>
        <p>MENU</p>
        <p>REWARDS</p>
        <p>GIFT CARDS</p>
      </section>
      <section className='right-navbar-side'>
        <div>
          <IoMdPin />
          <p>Find a store</p>
        </div>
        <button className='navbar-button light'>Sign in</button>
        <button className='navbar-button dark'>Join now</button>
      </section>
    </div>
  );
}

export default NavBar;
