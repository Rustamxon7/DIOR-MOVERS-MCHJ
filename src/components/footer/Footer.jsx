import './Footer.scss';
import { useTranslation } from 'react-i18next';

import { IoPaperPlane, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__column">
          <span className="footer__logo">{t('Footer.logo')}</span>
          <div className="footer__icons">
            <IoPaperPlane className="footer__icon" />
            <IoLogoInstagram className="footer__icon" />
            <IoLogoFacebook className="footer__icon" />
          </div>
          <p className="copyright">{t('Footer.copyright')}</p>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">{t('Footer.contact.heading')}</h3>
          <address>{t('Footer.contact.address')}</address>
          <a className="footer__link" href="#">
            {t('Footer.contact.phone')}
          </a>
          <br />
          <a className="footer__link" href="#">
            {t('Footer.contact.email')}
          </a>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">{t('Footer.services.heading')}</h3>
          <div className="footer__links">
            <a className="footer__link" href="#">
              {t('Footer.services.service1')}
            </a>
            <a className="footer__link" href="#">
              {t('Footer.services.service2')}
            </a>
            <a className="footer__link" href="#">
              {t('Footer.services.service3')}
            </a>
          </div>
        </div>{' '}
        <div className="footer__column">
          <h3 className="footer__heading">{t('Footer.about.heading')}</h3>
          <p className="footer__text">{t('Footer.about.text')}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
