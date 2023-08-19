import {useState} from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';

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
    </>
  )
}

export default App
