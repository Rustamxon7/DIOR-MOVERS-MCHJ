import './Hero.scss';

import heroImg from '../../assets/hero-img.jpg'

const Hero = () => {
  return (
    <>
      <header className='header'>
        <a href='#'>Logo</a>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__link'>Home</li>
            <li className='nav__link'>Services</li>
            <li className='nav__link'>Testimonials</li>
            <li className='nav__link'>FAQ</li>
            <li className='nav__link'>Contact</li>
          </ul>
        </nav>
      </header>
      <div className='hero'>
        <div className='container container--hero grid grid--2-cols'>
          <div className='nav__text-box'>
            <h1 className='heading-primary'>Make your moving eathy with us</h1>
            <p className='hero__description'>
              It is a long established fact that the readable content of a page
              when. Many desktop publishing packages and web page editors now
              use
            </p>
            <a className='btn' href='#'>
              Contact Us
            </a>
          </div>
          <div className='nav__img-box'>
            <img className='hero__img' src={heroImg} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
