import { useTranslation } from 'react-i18next';

import './Services.scss';

import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';

import line from '../../assets/line.svg';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className='services'>
      <div className='container'>
        <h2 className='subheading'>{t('Services.subtitle')}</h2>
        <p className='heading-secondary'>{t('Services.title')}</p>
      </div>
      <div className='container container--services grid grid--2-cols grid--center-v'>
        {/* SEVICE 1 */}
        <div className='services__text-box'>
          <h3 className='heading-tertiary'>{t('Services.service1.title')}</h3>
          <p className='services__description'>
            {t('Services.service1.description')}
          </p>
          <button className='btn btn--secondary'>
            {t('Services.service1.btn')}
          </button>
        </div>
        <div className='services__img-box'>
          {/* <img className="services__img-line--first" src={line} alt="" /> */}
          <img className='services__card-img' src={service1} alt='' />
          {/* <img className="services__img-line--second" src={line} alt="" /> */}
        </div>

        {/* SERVICE 2 */}
        <div className='services__img-box'>
          {/* <img className="services__img-line--first" src={line} alt="" /> */}
          <img className='services__card-img' src={service2} alt='' />
          {/* <img className="services__img-line--second" src={line} alt="" /> */}
        </div>
        <div className='services__text-box'>
          <h3 className='heading-tertiary'>{t('Services.service2.title')}</h3>
          <p className='services__description'>
            {t('Services.service2.description')}
          </p>
          <button className='btn btn--secondary'>
            {t('Services.service2.btn')}
          </button>
        </div>

        {/* SERVICE 3 */}
        <div className='services__text-box'>
          <h3 className='heading-tertiary'>{t('Services.service3.title')}</h3>
          <p className='services__description'>
            {t('Services.service3.description')}
          </p>
          <button className='btn btn--secondary'>
            {t('Services.service3.btn')}
          </button>
        </div>
        <div className='services__img-box'>
          {/* <img className='services__img-line--first' src={line} alt='' /> */}
          <img className='services__card-img' src={service3} alt='' />
          {/* <img className='services__img-line--second' src={line} alt='' /> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
