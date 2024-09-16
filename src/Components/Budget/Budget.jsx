import React from 'react'
import './Budget.css'
import logo from '/logowhite.png'

function Budget() {
  return (
    <div className='budgetContainer'>
      <div className='yourPartnerImage'>
        {/* <img src={logo} alt="CENTER DETAIL" className='logoBudget' /> */}
        {/* cele: pongo este logo completo o solo el logo? */}
        <p>Tu socio en la <br /> <strong> excelencia del  <br />detailing y wrapping</strong>            </p>
      </div>

      <div className='budgetContainerBox'>
        <h2>Presupuesto</h2>
        <p className='budgetSubtitle'>El presupuesto final para la abrir un local con nuestra franquicia</p>
      </div>
    </div>
  )
}

export default Budget