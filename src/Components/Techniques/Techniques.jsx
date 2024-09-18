import React from 'react'
import './Techniques.css'

function Techniques() {
    const techniques = [
        { name: 'VINILO', image: '/images/vinilo.png', text:'Aplicación y manipulación del vinilo a los vehículos, cambiando su color o diseño según la necesidad del cliente.', className: '' },
        { name: 'PPF', image: '/images/ppf.png', text:'Aplicación de la película de protección de pintura para proteger los vehículos contra daño y deterioro.', className: '' },
        { name: 'RESTAURACIÓN DE PINTURA', image: '/images/restauracionpintura.png', text:'Restauración y corrección de las imperfecciones en la pintura, así como devolverle al vehículo su lustre original.', className: '' },
        { name: 'Pulida de llantas', image: '/images/pulidallantas.png', text:'Limpieza y pulida de llantas para restablecer su aspecto original y protegerlas del agua y las rocas.', className: '' },
        { name: 'INTERIOR DETALLADO', image: '/images/interior.png', text:'Limpieza de paneles y detalles del interior del automóvil para mantenerlo en un estado inmaculado y limpio.', className: '' },
        { name: 'REVESTIMIENTO CERÁMICO', image: '/images/revestimiento.png', text:'Tratamiento que añade una capa protectora a la superficie del vehículo, bloqueado el daño del sol y los elementos.', className: '' }
    ]

    return (
        <div className='techniquesContainer'>
            <h2>FORMACIÓN</h2>
            <p className='formacionText'>
                En Center Detail, no solo ofrecemos una franquicia, sino también formación en técnicas avanzadas de detallado 
                automotriz, asegurando que brindes el mejor servicio y calidad a tus clientes.
            </p>

            <div className='techniquesBoxsContainer'>
                {
                    techniques.map(e=> (
                        <div className='techniqueBox'>
                            <img src={e.image} alt="" />
                            <div className='techniqueInfoBox'>
                                <h5>{e.name}</h5>
                                <p className='techniquesText'>{e.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Techniques