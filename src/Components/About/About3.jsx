import React from 'react'
import './About3.css'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

function About3() {
  return (
    <div className='objetivosContainer'>
        <h2>Objetivos</h2>
        <div>
            <h6 className='objetivosTitle'> <AutoFixHighOutlinedIcon className='objetivosIcon' /> Servicio de excelencia</h6>
            <p className='objetivosText'>Nos enfocaremos en ofrecer un servicio de excelencia que supere las expectativas de nuestros clientes, 
                con atención personalizada y técnicas de vanguardia para asegurar resultados impecables en cada visita.
            </p>
        </div>

        <div>
            <h6 className='objetivosTitle'> <AutoGraphOutlinedIcon className='objetivosIcon' /> Crecimiento sostenible</h6>
            <p className='objetivosText'>Buscamos un crecimiento sostenible, enfocándonos en relaciones duraderas con los clientes y creando 
                un ambiente acogedor. Con estrategias de marketing efectivas y una gestión eficiente, aspiramos a consolidarnos como líderes 
                en el sector del detailing y wrapping.
            </p>
        </div>

        <div>
            <h6 className='objetivosTitle'> <RocketLaunchOutlinedIcon className='objetivosIcon' /> Expansión</h6>
            <p className='objetivosText'>Nuestra visión se centra en la expansión estratégica, con el objetivo de crecer en nuevos mercados 
                y ampliar nuestra presencia regional o nacional. A través de una cuidadosa selección de ubicaciones y capacitación de personal 
                cualificado, buscamos llevar la excelencia de nuestros servicios a un público más amplio.
            </p>
        </div>
    </div>
  )
}

export default About3