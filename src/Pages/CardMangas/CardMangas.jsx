import React from 'react'
import './cardmangas.css'
import { Link as Anchor } from 'react-router-dom'

export default function CardMangas(props) {
  return (
    <div className='cart-shonen'>
                <div className={props?.style2}></div>
                <div className='text'>
                  <div>
                    <h3>{props.title}</h3>
                    <span className={props?.style3}>{props?.category}</span>
                  </div>
                  <Anchor to={'/mangas/'+props.id+"/1"}> Read </Anchor>
                </div>

                <div className='img-cart'>
                    <img className='imgManga' src={props.img} alt="" />
                </div>
              </div>
  )
}
