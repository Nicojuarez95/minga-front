import React from 'react'
import './foother.css'
import BotonSeccion1Hero1 from '../BotonSeccion1Hero1/BotonSeccion1Hero1'

export default function Foother() {
  return (
    <footer>
        <div className='rectangulo-img-foother'>
        </div>
        <div className='suscribe'>
            <h5 id='suscribeId'>Subscribe</h5>
            <div className='input-button'>
              <input type="email" placeholder='Enter your email'/>
              <BotonSeccion1Hero1 text="Subscribe Now"/>
            </div>
        </div>

        <div className='ultimo-cont'>

          <div id='ancors-footer'>
            <a href="">Home</a>
            <a href="">Comics</a>
          </div>

          <img id='img-footer' src="/Logomr.png" alt="" />

          <div className='cont-icono-boton'>
            <div className='iconos-footer'>
              <img src="/Facebook.png" alt="fb" />
              <img src="/Twitter.png" alt="tw" />
              <img src="/Vimeo.png" alt="vm" />
              <img src="/Youtube.png" alt="yt" />
            </div>
            <BotonSeccion1Hero1 text="Donate"/>
          </div>
        </div>
    </footer>
  )
}
