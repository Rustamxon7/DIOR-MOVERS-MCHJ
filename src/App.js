import logo from './logo.svg';
import './App.scss';

import Hero from './components/hero/Hero.jsx';
import Services from './components/services/Services';

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
    </div>
  );
}

export default App;
