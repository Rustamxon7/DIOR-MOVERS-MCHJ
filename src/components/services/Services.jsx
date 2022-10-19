import './Services.scss';

import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';

import line from '../../assets/line.svg';

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <h2 className='subheading'>SERVICES</h2>
        <p className='heading-secondary'>
          Get the best services from our company
        </p>
      </div>
      <div className='container grid grid--2-cols grid--center-v'>
        {/* SEVICE 1 */}
        <div className='services__text-box'>
          <h3 className='heading-tertiary'>Moving services</h3>
          <p className='services__description'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className='btn btn--secondary'>Read More</button>
        </div>
        <div className='services__img-box'>
          <img className='services__img-line--first' src={line} alt='' />
          <img className='services__card-img' src={service1} alt='' />
          <img className='services__img-line--second' src={line} alt='' />
        </div>

        {/* SERVICE 2 */}
        <div className='services__img-box'>
          <img className='services__img-line--first' src={line} alt='' />
          <img className='services__card-img' src={service2} alt='' />
          <img className='services__img-line--second' src={line} alt='' />
        </div>
        <div className='services__text-box'>
          <h3 className='heading-tertiary'>Moving services</h3>
          <p className='services__description'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className='btn btn--secondary'>Read More</button>
        </div>

        {/* SERVICE 2 */}
        <div className='services__text-box'>
          <h3 className='heading-tertiary'>Moving services</h3>
          <p className='services__description'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className='btn btn--secondary'>Read More</button>
        </div>
        <div className='services__img-box'>
          <img className='services__img-line--first' src={line} alt='' />
          <img className='services__card-img' src={service3} alt='' />
          <img className='services__img-line--second' src={line} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Services;
