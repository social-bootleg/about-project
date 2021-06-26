import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/stronaglowna' className='navbar-logo' onClick={closeMobileMenu}>
            Social Bootleg
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/stronaglowna' className='nav-links' onClick={closeMobileMenu}>
                Strona Główna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/omnie'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nasz zespół
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ksiazki'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Spotkania
              </Link>
            </li>

            <li>
              <Link
                to='/artykuly'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Aplikacja
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Aplikacja</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
