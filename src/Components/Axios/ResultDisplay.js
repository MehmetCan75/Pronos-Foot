import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Saint-Etienne - Angers: {props.afirstGame}</li>
            <li>Nantes - Clermont Foot: {props.bsecondGame}</li>
            <li>Lille - Brest : {props.cthirdGame}</li>
            <li>Nice - Lyon : {props.dfourthGame}</li>
            <li>Lens - Metz : {props.efifthGame}</li>
            <li>Lorient - Bordeaux : {props.fsixthGame}</li>
            <li>Reims - Troyes : {props.gseventhGame}</li>
            <li>Rennes - Strasbourg : {props.heigthGame}</li>
            <li>Monaco - Montpellier : {props.ininethGame}</li>
            <li>Marseille - PSG : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
