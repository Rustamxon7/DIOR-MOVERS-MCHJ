import './Cta.scss';
import { IoCall } from 'react-icons/io5';

const Cta = () => {
  return (
    <div className='cta-section'>
      <div className='container'>
        <div className='cta'>
          <h2 className='cta__heading'>
            Do you want to know more about our services?
          </h2>
          <a className='btn' href='http://'>
            <span>Call Us</span>
            <IoCall />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
