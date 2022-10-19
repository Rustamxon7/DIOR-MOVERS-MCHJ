import './Testimonials.scss';
import starIcon from '../../assets/star.png';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div>
        <div className='testimonials__stars'>
          <img src={starIcon} alt='star' />
          <img src={starIcon} alt='star' />
          <img src={starIcon} alt='star' />
          <img src={starIcon} alt='star' />
          <img src={starIcon} alt='star' />
        </div>
        <h2 className='testimonials__heading'>
          See how our clients review about our services.
        </h2>
      </div>
      <div>Right</div>
    </div>
  );
};

export default Testimonials;
