import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lille - Monaco : {props.afirstGame}</li>
            <li>Brest - Strasbourg : {props.bsecondGame}</li>
            <li>Metz - Lyon : {props.cthirdGame}</li>
            <li>Angers - Bordeaux : {props.dfourthGame}</li>
            <li>Clermont Foot - Montpellier : {props.efifthGame}</li>
            <li>Reims - Lens : {props.fsixthGame}</li>
            <li>Lorient - Marseille : {props.gseventhGame}</li>
            <li>PSG - Troyes : {props.heigthGame}</li>
            <li>Nice - Saint-Etienne : {props.ininethGame}</li>
            <li>Nantes - Rennes : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
