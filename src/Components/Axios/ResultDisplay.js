import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lens - Troyes: {props.afirstGame}</li>
            <li>Lille - Angers: {props.bsecondGame}</li>
            <li>Bordeaux - PSG : {props.cthirdGame}</li>
            <li>Marseille - Metz : {props.dfourthGame}</li>
            <li>Lorient - Brest : {props.efifthGame}</li>
            <li>Nantes - Strasbourg : {props.fsixthGame}</li>
            <li>Reims - Monaco : {props.gseventhGame}</li>
            <li>Saint-Etienne - Clermont Foot : {props.heigthGame}</li>
            <li>Nice - Montpellier : {props.ininethGame}</li>
            <li>Rennes - Lyon : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
