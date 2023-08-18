import {useState} from 'react'
import './App.css'
import Header from './components/header'

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
    </>
  )
}

export default App
