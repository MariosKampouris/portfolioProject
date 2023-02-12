import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import CircleLoader from "react-spinners/CircleLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])
  if (loading) {
    return (
      <div className='loading'>
        <CircleLoader
        color={'#26ff88'}
        loading={loading}
        size={200}
        />
      </div>
    )
  } else {
    return (
      <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
    )
  }
}

export default App