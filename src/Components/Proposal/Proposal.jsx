import React from 'react'
import './Proposal.css'
import car from '/images/car.png'

function Proposal() {
  return (
    <div className='proposalContainer' id='propuesta'>
      <h2>Propuesta <br className='tabletOff' /> de valor</h2>
      <p className='formacionText'>
        Nuestra propuesta de valor se basa en seis pilares fundamentales que definen y diferencian nuestro negocio en el mercado. 
        Estos elementos aseguran que cada cliente reciba una experiencia única y excepcional en cada interacción con nuestra marca.
      </p>

      <div className='carProposalBox'>
        <img src={car} alt="CAR" className='carProposal' />
        <div className='itemsProposalBox'>
          <p> <strong>1.</strong> Experiencia <strong> completa</strong></p>
          <p> <strong>2.</strong> Servicios <strong> especializados</strong></p>
          <p> <strong>3.</strong> Hacemos llegar <br /><strong> el producto</strong></p>
          <p> <strong>4.</strong> Marketing y <strong> <br /> estrategias  de venta</strong></p>
          <p> <strong>5.</strong> <strong>Innovación</strong> <br /> y tendencias</p>
          <p> <strong>6.</strong> Asesoramineto y <strong> <br /> soporte permanente</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Proposal