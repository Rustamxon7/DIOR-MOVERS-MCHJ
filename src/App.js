import logo from './logo.svg';
import './App.scss';

import Hero from './components/hero/Hero.jsx';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
