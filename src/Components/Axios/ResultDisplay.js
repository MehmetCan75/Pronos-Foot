import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Marseille - Angers : {props.afirstGame}</li>
            <li>Saint-Etienne - Montpellier : {props.bsecondGame}</li>
            <li>Monaco - Lyon : {props.cthirdGame}</li>
            <li>Lorient - Lens : {props.dfourthGame}</li>
            <li>Nice - Clermont Foot : {props.efifthGame}</li>
            <li>Reims - Bordeaux : {props.fsixthGame}</li>
            <li>Strasbourg - Nantes : {props.gseventhGame}</li>
            <li>Troyes - Metz : {props.heigthGame}</li>
            <li>Rennes - Brest : {props.ininethGame}</li>
            <li>Lille - PSG : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
