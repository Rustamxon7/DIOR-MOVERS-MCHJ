import { useTranslation } from 'react-i18next';
import './Cta.scss';
import { IoCall } from 'react-icons/io5';

const Cta = () => {
  const { t } = useTranslation();

  return (
    <div id='cta' className="cta-section">
      <div className="container">
        <div className="cta">
          <h2 className="cta__heading">
            {t('Cta.heading')}
          </h2>
          <a className="btn" href="tel:+998975570327">
            <span>{t('Cta.btn')}</span>
            <IoCall />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
