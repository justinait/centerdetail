import React from 'react'
import './Budget.css'
import logo from '/isologo.png'
import budget from '/images/budget.png'

function Budget() {
  return (
    <div className='budgetContainer'>
      <div className='yourPartnerImage'>
        <img src={logo} alt="CENTER DETAIL" className='logoBudget' />
        
        <p>Tu socio en la <br /> <strong> excelencia del  <br />detailing y wrapping</strong>            </p>
      </div>

      <div className='budgetContainerBox'>
        <h2>Presupuesto</h2>
        <p className='budgetSubtitle'>El presupuesto final para la abrir un local con nuestra franquicia</p>
        
        <img src={budget} alt="" className='budgetChart' />
      
        <div className='presupuestoTotalDiv'>
          <p className='presupuestoTotal'>Presupuesto total:</p>
          <p className='presupuesto'>30.000€</p>
        </div>
      </div>

    </div>
  )
}

export default Budget