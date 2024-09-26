import React from 'react'
import './Home.css'
import Techniques from '../Techniques/Techniques'
import About from '../About/About'
import Proposal from '../Proposal/Proposal'
import About3 from '../About/About3'
import Budget from '../Budget/Budget'
import Footer from '../Footer/Footer'
import logo from '/logowhite.png'
import lavar from '/images/vinilohero.jpg'
import vinilo from '/images/car.png'
import pulir from '/images/pulirhero.jpg'


function Home() {
  return (
    <div>
      <div className='heroContainer' id='inicio'>
        <div>

          <div className='heroImageDiv'>
            <img src={lavar} alt="" className='imagesHero'/>
            <img src={vinilo} alt="" className='imagesHero'/>
            <img src={pulir} alt="" className='imagesHero' style={{objectPosition: '40%'}}/>
          </div>

          <div className='heroInfo'>
            <img src={logo} alt="" className='heroLogo' />
            <div className='heroTextContainer'>
              <h1>Centro Profesional</h1>
              <h5>Franquicias de detallado de vehículos</h5>
            </div>
          </div>
        </div>

        <div className='heroFooter'>
          <p className='heroFooterStrong'>Donde cada coche cuenta una historia</p>
          <p className='heroFooterP'>y tu negocio escribe el próximo capítulo.</p>          
        </div>
      </div>
      
      < About />
      < Proposal />
      < About3 />
      < Techniques />

      < Budget />
      < Footer />
    </div>
  )
}

export default Home