import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Strasbourg - Metz : {props.afirstGame}</li>
            <li>Lens - Lille : {props.bsecondGame}</li>
            <li>Saint-Etienne - Bordeaux : {props.cthirdGame}</li>
            <li>Nice - Monaco : {props.dfourthGame}</li>
            <li>Angers - Nantes : {props.efifthGame}</li>
            <li>Clermont Foot - Brest : {props.fsixthGame}</li>
            <li>Reims - Lorient : {props.gseventhGame}</li>
            <li>Troyes - Montpellier : {props.heigthGame}</li>
            <li>Marseille - Rennes : {props.ininethGame}</li>
            <li>PSG - Lyon : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
