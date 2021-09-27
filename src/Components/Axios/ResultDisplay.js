import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lens - Reims: {props.afirstGame}</li>
            <li>Montpellier - Strasbourg : {props.bsecondGame}</li>
            <li>Nice - Brest : {props.cthirdGame}</li>
            <li>Rennes - PSG : {props.dfourthGame}</li>
            <li>Angers - Metz : {props.efifthGame}</li>
            <li>Lorient - Clermont Foot : {props.fsixthGame}</li>
            <li>Monaco - Bordeaux : {props.gseventhGame}</li>
            <li>Nantes - Troyes : {props.heigthGame}</li>
            <li>Lille - Marseille : {props.ininethGame}</li>
            <li>Saint-Etienne - Lyon : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
