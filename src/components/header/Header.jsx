import './Header.scss';

import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

import logo from '../../assets/logo.svg';
import uzbFlag from '../../assets/uzb-flag.png';
import rusFlag from '../../assets/rus-flag.png';
import usaFlag from '../../assets/usa-flag.png';
import { useState } from 'react';

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return (
    // if component has page props it changes background color to white
    <header className={`header${props.page == true ? ' header--page' : ''}`}>
      <NavLink to='/' className='logo'>
        <img src={logo} alt='logo__image' className='logo__image' />
      </NavLink>

      <div className='lang'>
        <button
          className='lang__btn'
          aria-label='Change language'
          // onClick={() => clickLang("uz")}
        >
          <img src={uzbFlag} alt='' />
        </button>
        <button
          className='lang__btn'
          aria-label='Change language'
          // onClick={() => clickLang("ru")}
        >
          <img src={rusFlag} alt='' />
        </button>
        <button
          className='lang__btn'
          aria-label='Change language'
          // onClick={() => clickLang("en")}
        >
          <img src={usaFlag} alt='' />
        </button>
      </div>

      <nav className={`nav${open ? ' nav--open' : ''}`}>
        <ul className='nav__list'>
          <li className='nav__link'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='nav__link'>
            <NavLink to='/cleaning'>Cleaning</NavLink>
          </li>
          <li className='nav__link'>
            <NavLink to='/moving'>Moving</NavLink>
          </li>
          <li className='nav__link'>Services</li>
          <a className='btn' href='#'>
            Contact Us
          </a>
        </ul>
      </nav>

      <button className='header__btn'>
        {open && <IoClose className='header__btn--close' onClick={() => setOpen(false)} />}
        {!open && <IoMenu className='header__btn--main' onClick={() => setOpen(true)} />}
      </button>
    </header>
  );
};

export default Header;
