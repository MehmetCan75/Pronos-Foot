import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Angers - Montpellier : {props.afirstGame}</li>
            <li>Brest - Bordeaux : {props.bsecondGame}</li>
            <li>Clermont Foot - Lyon : {props.cthirdGame}</li>
            <li>Lens - Monaco : {props.dfourthGame}</li>
            <li>Lille - Rennes : {props.efifthGame}</li>
            <li>Lorient - Troyes : {props.fsixthGame}</li>
            <li>Marseille - Strasbourg : {props.gseventhGame}</li>
            <li>Nantes - Saint-Etienne : {props.heigthGame}</li>
            <li>PSG - Metz : {props.ininethGame}</li>
            <li>Reims - Nice : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
