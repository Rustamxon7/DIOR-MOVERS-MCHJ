import "./Header.scss";

import logo from "../../assets/logo.svg";
import uzbFlag from "../../assets/uzb-flag.png";
import rusFlag from "../../assets/rus-flag.png";
import usaFlag from "../../assets/usa-flag.png";

const Header = (props) => {
  return (
    // if component has page props it changes background color to white
    <header className={`header${props.page && " header--page"}`}>
      <a href="#" className="logo">
        <img src={logo} alt="logo__image" className="logo__image" />
      </a>

      <div className="lang">
        <button
          className="lang__btn"
          aria-label="Change language"
          // onClick={() => clickLang("uz")}
        >
          <img src={uzbFlag} alt="" />
        </button>
        <button
          className="lang__btn"
          aria-label="Change language"
          // onClick={() => clickLang("ru")}
        >
          <img src={rusFlag} alt="" />
        </button>
        <button
          className="lang__btn"
          aria-label="Change language"
          // onClick={() => clickLang("en")}
        >
          <img src={usaFlag} alt="" />
        </button>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__link">Nav.Home</li>
          <li className="nav__link">Nav.About</li>
          <li className="nav__link">Nav.Services</li>
          <li className="nav__link">Nav.Services</li>
          <a className="btn" href="#">
            Hero.btn1
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
