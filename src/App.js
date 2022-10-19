import logo from './logo.svg';
import './App.scss';

import Hero from './components/hero/Hero.jsx';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Faq from './components/faq/Faq';
import Why from './components/why/Why';

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Testimonials />
      <Why />
      <Faq />
    </div>
  );
}

export default App;
