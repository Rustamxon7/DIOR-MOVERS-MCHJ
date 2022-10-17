import './Hero.scss';

import logo from '../../assets/logo.svg';
import heroImg from '../../assets/hero-img.jpg';

const Hero = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="logo__image" className="logo__image" />
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__link">Home</li>
            <li className="nav__link">Services</li>
            <li className="nav__link">Testimonials</li>
            <li className="nav__link">FAQ</li>
            <li className="nav__link contact">Contact</li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <div className="container container--hero grid grid--2-cols">
          <div className="hero__text-box">
            <h1 className="heading-primary">Make your moving eathy with us</h1>
            <p className="hero__description">
              It is a long established fact that the readable content of a page
              when. Many desktop publishing packages and web page editors now
              use
            </p>
            <div className="btns">
              <a className="btn" href="#">
                Contact Us
              </a>
              <a className="btn btn--secondary" href="#">
                Learn More ↓
              </a>
            </div>
          </div>
          <div className="hero__img-box">
            <img className="hero__img" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
