import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lille - Metz : {props.afirstGame}</li>
            <li>Lens - Lyon : {props.bsecondGame}</li>
            <li>Nantes - PSG : {props.cthirdGame}</li>
            <li>Nice - Angers : {props.dfourthGame}</li>
            <li>Lorient - Montpellier : {props.efifthGame}</li>
            <li>Reims - Brest : {props.fsixthGame}</li>
            <li>Rennes - Troyes : {props.gseventhGame}</li>
            <li>Saint-Etienne - Strasbourg : {props.heigthGame}</li>
            <li>Bordeaux - Monaco : {props.ininethGame}</li>
            <li>Marseille - Clermont Foot : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
