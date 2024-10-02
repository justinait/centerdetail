import React from 'react'
import './Franchise.css'
import PlaceIcon from '@mui/icons-material/Place';

function Franchise() {
    const franchise = [
        {city: 'Puerto Banús, Marbella', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12831.056169857973!2d-4.97034224667662!3d36.48741475555769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329c0941a5e91%3A0x186ddbc9d5cea29b!2zVXJiLiBQdWVydG8gSm9zw6kgQmFuw7pzLCAyOTY2MCBNYXJiZWxsYSwgTcOhbGFnYSwgRXNwYcOxYQ!5e0!3m2!1ses-419!2sar!4v1727386497066!5m2!1ses-419!2sar'},
        {city: 'Palma de Mallorca, Mallorca', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98401.5237632438!2d2.6229754239787018!3d39.5810771804904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297948706061e07%3A0xe1523779302cd452!2sPalma%20de%20Mallorca%2C%20Illes%20Balears%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1727388230947!5m2!1ses-419!2sar'},
        {city: 'Paseo la Castellana, Madrid', map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.250916782007!2d-3.692455799999999!3d40.447583099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422900251f3b25%3A0xb42c12bc1c8cdc95!2sCorteingl%C3%A9s!5e0!3m2!1ses-419!2sar!4v1727872974977!5m2!1ses-419!2sar"}
    ]
    
  return (
    <div className='franchiseContainer'>
        <h2>NUESTRAS FRANQUICIAS</h2>
        <p className='formacionText'>¿Qué estás esperando para sumarte?</p>
        <div className='mapBoxFranchise'>
            {franchise.map((e, i) => {
                return (
                    <div key={i}>
                        <iframe
                            src={e.map}
                            width="100%"
                            height="130"
                            style={{ border: 0 }}
                            className='mapContainerFranchise'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <h4><PlaceIcon/> {e.city}</h4>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Franchise