import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom :{props.name}</h3>
        <ul className="displayResult">
            <li>Nantes - Lyon : {props.afirstGame}</li>
            <li>Nice - Bordeaux : {props.bsecondGame}</li>
            <li>Marseille - Saint-Etienne : {props.cthirdGame}</li>
            <li>Troyes - Monaco : {props.dfourthGame}</li>
            <li>Angers - Rennes : {props.efifthGame}</li>
            <li>Clermont Foot - Metz : {props.fsixthGame}</li>
            <li>Lens - Lorient : {props.gseventhGame}</li>
            <li>Strasbourg - Brest : {props.heigthGame}</li>
            <li>Lille - Montpellier : {props.ininethGame}</li>
            <li>Reims - PSG : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
