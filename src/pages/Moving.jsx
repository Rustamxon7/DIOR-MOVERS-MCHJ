import './Page.scss';
import Footer from '../components/footer/Footer';

import logo from '../assets/logo.svg';
import uzbFlag from '../assets/uzb-flag.png';
import usaFlag from '../assets/usa-flag.png';
import rusFlag from '../assets/rus-flag.png';

const Moving = () => {
  return (
    <>
      <header className='header header--page'>
        <a href='#' className='logo'>
          <img src={logo} alt='logo__image' className='logo__image' />
        </a>

        <div className='lang'>
          <button
            className='lang__btn'
            aria-label='Change language'
            // onClick={() => clickLang('uz')}
          >
            <img src={uzbFlag} alt='' />
          </button>
          <button
            className='lang__btn'
            aria-label='Change language'
            // onClick={() => clickLang('ru')}
          >
            <img src={rusFlag} alt='' />
          </button>
          <button
            className='lang__btn'
            aria-label='Change language'
            // onClick={() => clickLang('en')}
          >
            <img src={usaFlag} alt='' />
          </button>
        </div>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__link'>Nav.Home</li>
            <li className='nav__link'>Nav.About</li>
            <li className='nav__link'>Nav.Services</li>
            <li className='nav__link'>Nav.Services</li>
            <a className='btn' href='#'>
              Hero.btn1
            </a>
          </ul>
        </nav>
      </header>

      {/* hero image */}
      <div className='moving'>
        <img
          className='page__hero-img'
          src='https://images.unsplash.com/photo-1614359835514-92f8ba196357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
          alt=''
        />
        <div className='container container--content'>
          <p className='subheading'>Services</p>
          <h2 className='heading-secondary'>Moving services</h2>
          <h3 className='heading-tertiary'>
            The standard Lorem Ipsum passage, used since the 1500s
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className='heading-tertiary'>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p className='paragraph'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <h3 className='heading-tertiary'>1914 translation by H. Rackham</h3>
          <p className='paragraph'>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Moving;
