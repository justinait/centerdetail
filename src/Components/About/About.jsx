import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import './About.css'

function About() {
  const about = [
    { name: 'Centros específicos', image: <FmdGoodOutlinedIcon/>, text:'Nuestros centros especializados son templos del detailing y wrapping, diseñados para ofrecer una calidad y atención insuperables', className: '' },
    { name: 'Trabajamos con empresas', image: <HandshakeOutlinedIcon/>, text:'Establecemos alianzas estratégicas con líderes de la industria para ofrecer a nuestros franquiciados materiales avanzados y servicios especializados.', className: '' },
    { name: 'Recursos y materiales', image: <HandymanOutlinedIcon/>, text:'Nuestros locales cuentan con recursos y materiales avanzados, asegurando que puedas ofrecer servicios de primer nivel y superar las expectativas de tus clientes', className: '' },
    // { name: 'Decoración', image: <ColorLensOutlinedIcon/>, text:'La decoración de nuestros locales refleja nuestra identidad y compromiso con la excelencia, creando un ambiente acogedor y sofisticado', className: '' },
    // { name: 'Iluminación', image: <LightbulbOutlinedIcon/>, text:'La iluminación es clave en detailing y wrapping, destacando cada matiz y textura. Nuestros sistemas de luz crean una atmósfera cautivadora', className: '' },
    { name: 'Diseño del local', image: <StorefrontOutlinedIcon/>, text:'El diseño de tu local es crucial para la experiencia del cliente. Nuestros expertos colaboran contigo para crear un espacio que refleje la identidad de tu marca', className: '' },
    { name: 'Apertura', image: <VolunteerActivismOutlinedIcon/>, text:'Te acompañamos en cada paso, brindando apoyo y recursos para que tu inauguración sea un evento memorable que marque una nueva etapa en tu carrera empresarial.', className: '' },
    // { name: 'Productos', image: <SellOutlinedIcon/>, text:'Nuestra gama de productos premium garantiza resultados excepcionales en cada servicio, elevando la experiencia de tus clientes con herramientas y materiales de la más alta calidad.', className: '' },
    { name: 'Finalización del Local', image: <TaskAltOutlinedIcon/>, text:'Nuestro compromiso continúa una vez que tu local esté en funcionamiento, brindándote apoyo constante para garantizar la satisfacción tanto tuya como de tus clientes.', className: '' }
  ]
  return (
    <div className='aboutContainer'  >
      <h2>¿Por qué elegir <br />center detail?</h2>  
      {
        about.map(e=> (
          <div className='aboutBox'>
            <div className='aboutIconCircle'>
              {e.image}
            </div>
            <div className='aboutInfoBox'>
              <h5>{e.name}</h5>
              <p className='aboutText'>{e.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default About