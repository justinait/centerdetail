import React from 'react'
import './Home.css'
import Techniques from '../Techniques/Techniques'
import About from '../About/About'
import Proposal from '../Proposal/Proposal'
import About2 from '../About/About2'
import About3 from '../About/About3'
import Budget from '../Budget/Budget'
import Footer from '../Footer/Footer'
import logo from '/logowhite.png'

function Home() {
  return (
    <div>
      <div className='heroContainer'>
        <div className='hero'>
          <img src={logo} alt="" width={400} />
          <h1>Centro Profesional</h1>
          <h5>Proyecto y apertura</h5>
        </div>
        <div className='heroFooter'>
          <p className='heroFooterStrong'>Limpieza profesional y precisión.</p>
          <p className='heroFooterP'>Tu vehículo en su mejor versión</p>
        </div>
      </div>
      
      < Techniques />
      < About />
      < Proposal />
      < About2 />
      < About3 />

      <Budget />
      <Footer />
    </div>
  )
}

export default Home