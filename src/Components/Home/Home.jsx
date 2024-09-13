import React from 'react'
import './Home.css'
import Techniques from '../Techniques/Techniques'

function Home() {
  return (
    <div>
      <div className='heroContainer'>
        <div className='hero'>
          <h1>Centro Profesional</h1>
          <h5>Proyecto y apertura</h5>
        </div>
        <div className='heroFooter'>
          <p className='heroFooterStrong'>Limpieza profesional y precisión.</p>
          <p className='heroFooterP'>Tu vehículo en su mejor versión</p>
        </div>
      </div>
      
      < Techniques />
    </div>
  )
}

export default Home