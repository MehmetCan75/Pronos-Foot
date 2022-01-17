import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Clermont Foot - Strasbourg : {props.afirstGame}</li>
            <li>Lille - Lorient : {props.bsecondGame}</li>
            <li>Montpellier - Troyes : {props.cthirdGame}</li>
            {/* <li>Rennes - Bordeaux : {props.dfourthGame}</li>
            <li>Lorient - Angers : {props.efifthGame}</li>
            <li>Monaco - Clermont Foot : {props.fsixthGame}</li>
            <li>Reims - Metz : {props.gseventhGame}</li>
            <li>Strasbourg - Montpellier : {props.heigthGame}</li>
            <li>Troyes - Lyon : {props.ininethGame}</li>
            <li>Marseille - Lille : {props.jtenthGame}</li> */}
            </ul>
    </div>
  )
}
