import React from 'react'
import './Footer.css'
import ig from '/ig.png'
import mail from '/mail.png'

function Footer() {
  return (
    <div className='footerContainer'  id='contacto'>
      <h2>Contacto</h2>
      
      <p className='footerSubtitle'>¿Listo para dar el siguiente paso?</p>
      <p className='footerText'>Estamos disponibles para cualquier consulta, <br className='tabletOn'/> no dudes en comunicarte con nosotros</p>

      <div className='contactContainer'>

        <div>
          <img src={ig} alt="INSTAGRAM" className='footerIconMail' />
          <a href="https://www.instagram.com/center.detail/" className='contactContainerP' style={{color: 'black', textDecoration: 'none'}}>@center.detail</a>
        </div>
          
        <div>
          <img src={mail} alt="CORREO" className='footerIconMail'/>
          <a href="mailto:F.centerdetail@gmail.com" target='_blank' className='contactContainerP' style={{color: 'black', textDecoration: 'none'}}>F.centerdetail@gmail.com</a>
        </div>
      </div>

    </div>
  )
}

export default Footer