import {useState} from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Slider from './components/slider';
import Hotdeals from './components/hotdeals';

function App() {

  const [mobileNav, setMobileNav] = useState(() => false);

  function toggleNav(){
    setMobileNav(prevState => !prevState)
  }

  return (
    <>
      <Header 
      mobileNav={mobileNav}
      toggleNav={toggleNav}/>
      <Hero />
      <Slider />
      <Hotdeals />
    </>
  )
}

export default App
