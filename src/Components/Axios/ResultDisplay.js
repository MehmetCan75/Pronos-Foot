import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lorient - Saint-Etienne : {props.afirstGame}</li>
            <li>Reims - Rennes : {props.bsecondGame}</li>
            <li>Clermont Foot - PSG : {props.cthirdGame}</li>
            <li>Bordeaux - Metz : {props.dfourthGame}</li>
            <li>Angers - Lille : {props.efifthGame}</li>
            <li>Brest - Nantes : {props.fsixthGame}</li>
            <li>Monaco - Troyes : {props.gseventhGame}</li>
            <li>Lens - Nice : {props.heigthGame}</li>
            <li>Strasbourg - Lyon : {props.ininethGame}</li>
            <li>Marseille - Montpellier : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
