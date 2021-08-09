import React from 'react'
import './Header.css'
import FootImg from './football.svg'

export default function Header() {
  return (
    <div className="header">
      <h1 className="titre">Pronos Foot</h1>
      <img src={FootImg} alt="foot-img" className="foot-img"/>
    </div>
  )
}
