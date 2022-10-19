import './Testimonials.scss';
import starIcon from '../../assets/star.png';
import user1Image from '../../assets/user1.jpg';

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
      <div className='testimonials__right'>
        <div className='testimonial'>
          <img className='testimonial__img' src={user1Image} alt='star' />
          <p className='testimonial__text'>
            Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus in hac habitasse platea dictumst
            vestibulum.
          </p>
          <p className='testimonial__name'>- Lee Sims</p>
        </div>
        <div className='testimonial'>
          <img className='testimonial__img' src={user1Image} alt='star' />
          <p className='testimonial__text'>
            Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus in hac habitasse platea dictumst
            vestibulum.
          </p>
          <p className='testimonial__name'>- Lee Sims</p>
        </div>
        <div className='testimonial'>
          <img className='testimonial__img' src={user1Image} alt='star' />
          <p className='testimonial__text'>
            Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus in hac habitasse platea dictumst
            vestibulum.
          </p>
          <p className='testimonial__name'>- Lee Sims</p>
        </div>
        <div className='testimonial'>
          <img className='testimonial__img' src={user1Image} alt='star' />
          <p className='testimonial__text'>
            Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus in hac habitasse platea dictumst
            vestibulum.
          </p>
          <p className='testimonial__name'>- Lee Sims</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
