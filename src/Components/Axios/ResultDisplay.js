import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lorient - Lyon : {props.afirstGame}</li>
            <li>Lens - Brest : {props.bsecondGame}</li>
            <li>Nice - PSG : {props.cthirdGame}</li>
            <li>Saint-Etienne - Metz : {props.dfourthGame}</li>
            <li>Bordeaux - Troyes : {props.efifthGame}</li>
            <li>Nantes - Montpellier : {props.fsixthGame}</li>
            <li>Reims - Strasbourg : {props.gseventhGame}</li>
            <li>Rennes - Angers : {props.heigthGame}</li>
            <li>Lille - Clermont Foot : {props.ininethGame}</li>
            <li>Marseille - Monaco : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
