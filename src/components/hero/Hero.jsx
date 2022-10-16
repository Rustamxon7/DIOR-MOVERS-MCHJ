import './Hero.scss'

const Hero = () => {
  return <div className='hero'>
    <header className='header'>
      <a href='#'>Logo</a>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__link'>Home</li>
          <li className='nav__link'>Services</li>
          <li className='nav__link'>Testimonials</li>
          <li className='nav__link'>FAQ</li>
          <li className='nav__link'>Contact</li>
        </ul>
      </nav>
    </header>
  </div>
};

export default Hero;