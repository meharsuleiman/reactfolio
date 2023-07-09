import React from 'react';
import { Link } from 'react-router-dom';

import './styles/footer.css';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <div className='footer-links'>
          <ul className='footer-nav-link-list'>
            <li className='footer-nav-link-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link to='/about'>About</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link to='/projects'>Happy Clients</Link>
            </li>

            <li className='footer-nav-link-item'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div className='footer-credits'>
          <div className='footer-credits-text'>
            Made By ❤️
            <a
              href='https://meharsulaiman.vercel.app'
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              mehar sulaiman
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
