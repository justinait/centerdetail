import React from 'react'
import './Footer.css'
import ig from '/ig.png'

function Footer() {
  return (
    <div className='footerContainer'>
      <h2>Contacto</h2>
      
      <p className='footerSubtitle'>¿Listo para dar el siguiente paso?</p>
      <p className='footerText'>Estamos disponibles para cualquier consulta, no dudes en comunicarte con nosotros</p>

      <div>
        <img src={ig} alt="" />
        <p>@centerdetail</p>
      </div>
    </div>
  )
}

export default Footer