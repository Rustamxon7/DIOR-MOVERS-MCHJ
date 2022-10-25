import { useTranslation } from 'react-i18next';

import './Hero.scss';

import logo from '../../assets/logo.svg';
import heroImg from '../../assets/hero-img.jpg';
import uzbFlag from '../../assets/uzb-flag.png';
import usaFlag from '../../assets/usa-flag.png';
import rusFlag from '../../assets/rus-flag.png';

import { IoArrowDown } from 'react-icons/io5';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const clickLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className='header'>
        <a href='#' className='logo'>
          <img src={logo} alt='logo__image' className='logo__image' />
        </a>

        <div className='lang'>
          <button
            className='lang__btn'
            aria-label='Change language'
            onClick={() => clickLang('uz')}
          >
            <img src={uzbFlag} alt='' />
          </button>
          <button
            className='lang__btn'
            aria-label='Change language'
            onClick={() => clickLang('ru')}
          >
            <img src={rusFlag} alt='' />
          </button>
          <button
            className='lang__btn'
            aria-label='Change language'
            onClick={() => clickLang('en')}
          >
            <img src={usaFlag} alt='' />
          </button>
        </div>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__link'>{t('Nav.Home')}</li>
            <li className='nav__link'>{t('Nav.About')}</li>
            <li className='nav__link'>{t('Nav.Services')}</li>
            <li className='nav__link'>{t('Nav.Services')}</li>
            <a className='btn' href='#'>
              {t('Hero.btn1')}
            </a>
          </ul>
        </nav>
      </header>
      <div className='hero'>
        <div className='container container--hero grid grid--2-cols'>
          <div className='hero__text-box'>
            <h1 className='heading-primary'>{t('Hero.title')}</h1>
            <p className='hero__description'>{t('Hero.description')}</p>
            <div className='btns'>
              <a className='btn' href='#'>
                {t('Hero.btn1')}
              </a>
              <a className='btn btn--secondary' href='#'>
                {t('Hero.btn2')}
                <IoArrowDown />
              </a>
            </div>
          </div>
          <div className='hero__img-box'>
            <img className='hero__img' src={heroImg} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
