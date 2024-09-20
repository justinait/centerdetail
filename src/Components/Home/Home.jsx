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
      <div className='heroContainer' id='inicio'>
        <div className='hero'>
          <img src={logo} alt="" className='heroLogo' />
          <h1>Centro Profesional</h1>
          {/* <h5>Proyecto y apertura</h5> */}
          <h5>Franquicias de detallado de vehículos</h5>
        </div>
        <div className='heroFooter'>
          <p className='heroFooterStrong'>Donde cada coche cuenta una historia</p>
          <p className='heroFooterP'>y tu negocio escribe el próximo capítulo.</p>          
        </div>
      </div>
      
      < About />
      < Techniques />
      < Proposal />
      {/* < About2 /> */}
      < About3 />

      < Budget />
      < Footer />
    </div>
  )
}

export default Home