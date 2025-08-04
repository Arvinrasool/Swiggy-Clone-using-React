import {useState } from 'react';
import { LOGO_URL } from '../config/image';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../config/useOnlineStatus';

const Header = () => {

  const [btnChange, change] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return(
    <div>
      <div className='flex items-center justify-around'>
        <div>
          <img className='w-25'
          src = {LOGO_URL} />
        </div>
        <div className = 'Nav-links'>
          <ul className='flex gap-13'>
            <li>OnlineStatus :{onlineStatus? ' 🟢' : '🔴'}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to ='/Grocery'>Grocery</Link></li>
            <li><Link to = '#'>Cart</Link></li>
          </ul>
        </div>
        <button className="px-5 py-1 border-2 cursor-pointer " onClick={
          () => {
            btnChange === 'Login'? change('Logout') : change('Login')
          }
        }>{btnChange}</button>
      </div>
    </div>
    );
}

export default Header;