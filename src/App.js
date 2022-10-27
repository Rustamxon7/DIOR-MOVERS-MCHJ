import logo from './logo.svg';
import './Queries.scss'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/hero/Hero.jsx';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Faq from './components/faq/Faq';
import Why from './components/why/Why';
import Cta from './components/cta/Cta';
import Footer from './components/footer/Footer';
import Moving from './pages/Moving';
import Cleaning from './pages/Cleaning';
import Furniture from './pages/Futniture';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <Services />
                <Testimonials />
                <Why />
                <Faq />
                <Cta />
                <Footer />
              </>
            }
          />
          <Route path='/moving' element={<Moving />}></Route>
          <Route path='/cleaning' element={<Cleaning />}></Route>
          <Route path='/furniture' element={<Furniture />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
