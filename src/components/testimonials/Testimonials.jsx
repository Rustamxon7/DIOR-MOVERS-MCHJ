import { useTranslation } from 'react-i18next';

import './Testimonials.scss';
import starIcon from '../../assets/star.png';
import user1Image from '../../assets/user1.jpg';
import user2Image from '../../assets/user2.jpg';
import user3Image from '../../assets/user3.jpg';
import user4Image from '../../assets/user4.jpg';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="testimonials">
      <div>
        <div className="testimonials__stars">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
        </div>
        <h2 className="testimonials__heading">{t('Testimonials.heading')}</h2>
      </div>
      <div className="testimonials__right">
        <div className="testimonial">
          <img className="testimonial__img" src={user1Image} alt="star" />
          <p className="testimonial__text">
            {t('Testimonials.testimonial1.text')}
          </p>
          <p className="testimonial__name">
            {t('Testimonials.testimonial1.name')}
          </p>
        </div>
        <div className="testimonial">
          <img className="testimonial__img" src={user2Image} alt="star" />
          <p className="testimonial__text">
            {t('Testimonials.testimonial2.text')}
          </p>
          <p className="testimonial__name">
            {t('Testimonials.testimonial2.name')}
          </p>
        </div>
        <div className="testimonial">
          <img className="testimonial__img" src={user3Image} alt="star" />
          <p className="testimonial__text">
            {t('Testimonials.testimonial3.text')}
          </p>
          <p className="testimonial__name">
            {t('Testimonials.testimonial3.name')}
          </p>
        </div>
        <div className="testimonial">
          <img className="testimonial__img" src={user4Image} alt="star" />
          <p className="testimonial__text">
            {t('Testimonials.testimonial4.text')}
          </p>
          <p className="testimonial__name">
            {t('Testimonials.testimonial4.name')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
