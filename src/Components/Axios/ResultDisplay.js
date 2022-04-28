import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Strasbourg - PSG : {props.afirstGame}</li>
            <li>Lens - Nantes : {props.bsecondGame}</li>
            <li>Rennes - Saint-Etienne : {props.cthirdGame}</li>
            <li>Troyes - Lille : {props.dfourthGame}</li>
            <li>Brest - Clermont Foot : {props.efifthGame}</li>
            <li>Lorient - Reims : {props.fsixthGame}</li>
            <li>Monaco - Angers : {props.gseventhGame}</li>
            <li>Montpellier - Metz : {props.heigthGame}</li>
            <li>Bordeaux - Nice : {props.ininethGame}</li>
            <li>Marseille - Lyon : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
