import './Why.scss';

import feature1 from '../../assets/feature-1.png';
import feature2 from '../../assets/feature-2.png';
import feature3 from '../../assets/feature-3.png';

const Why = () => {
  return (
    <div className='why-section'>
      <div className='container'>
        <h2 className='subheading'>YOUR BEST DECISION</h2>
        <p className='heading-secondary'>Why choose Dior Movers</p>
      </div>
      <div className='container grid grid--3-cols'>
        <div className='feature'>
          <img
            className='feature__icon'
            src={feature1}
            alt='3 red clothed crew members'
          />
          <h4 className='feature__title'>Professional Crew</h4>
          <p className='feature__description'>
            In massa tempor nec feugiat nisl pretium fusce id velit ut tortor
            pretium viverra suspendisse potenti nullam ac tortor vitae purus
            faucibus ornare suspendisse sed
          </p>
        </div>

        {/* feature 2 */}
        <div className='feature'>
          <img
            className='feature__icon'
            src={feature2}
            alt='Handle with care'
          />
          <h4 className='feature__title'>We Care</h4>
          <p className='feature__description'>
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non
            pulvinar neque laoreet suspendisse interdum consectetur libero id
            faucibus nisl tincidunt eget nullam non nisi
          </p>
        </div>

        {/* feature 3 */}
        <div className='feature'>
          <img
            className='feature__icon'
            src={feature3}
            alt='Handle with care'
          />
          <h4 className='feature__title'>We have experience</h4>
          <p className='feature__description'>
            Consequat mauris nunc congue nisi vitae suscipit tellus mauris a
            diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus
            cras adipiscing enim
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
