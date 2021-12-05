import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Nantes - Lens : {props.afirstGame}</li>
            <li>Brest - Montpellier : {props.bsecondGame}</li>
            <li>Reims - Saint-Etienne : {props.cthirdGame}</li>
            <li>Lille - Lyon : {props.dfourthGame}</li>
            <li>Angers - Clermont Foot : {props.efifthGame}</li>
            <li>Metz - Lorient : {props.fsixthGame}</li>
            <li>Rennes - Nice : {props.gseventhGame}</li>
            <li>Troyes - Bordeaux : {props.heigthGame}</li>
            <li>Strasbourg - Marseille : {props.ininethGame}</li>
            <li>PSG - Monaco : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
