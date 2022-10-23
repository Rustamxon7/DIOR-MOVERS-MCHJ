import './Footer.scss';

import { IoPaperPlane, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container footer__container'>
        <div className='footer__column'>
          <span className='footer__logo'>DIOR MOVERS</span>
          <div className='footer__icons'>
            <IoPaperPlane className='footer__icon' />
            <IoLogoInstagram className='footer__icon' />
            <IoLogoFacebook className='footer__icon' />
          </div>
          <p className='copyright'>
            Copyright © 2022 by Dior Movers, Inc. All rights reserved.
          </p>
        </div>
        <div className='footer__column'>
          <h3 className='footer__heading'>Contact Us</h3>
          <address>
            623 Harrison St., 2nd Floor, San Francisco, CA 94107
          </address>
          <a className='footer__link' href='#'>
            97-567-51-46
          </a>
          <br />
          <a className='footer__link' href='#'>
            hello@diormovers.uz
          </a>
        </div>
        <div className='footer__column'>
          <h3 className='footer__heading'>Services</h3>
          <div className='footer__links'>
            <a className='footer__link' href='#'>
              Moving Services
            </a>
            <a className='footer__link' href='#'>
              Cleaning Services
            </a>
            <a className='footer__link' href='#'>
              Furniture Services
            </a>
          </div>
        </div>{' '}
        <div className='footer__column'>
          <h3 className='footer__heading'>About Us</h3>
          <p className='footer__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquet et
            dolore magna aliquet interdum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
