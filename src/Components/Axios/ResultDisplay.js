import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Angers - Monaco : {props.afirstGame}</li>
            <li>Brest - Saint-Etienne : {props.bsecondGame}</li>
            <li>Metz - Montpellier : {props.cthirdGame}</li>
            <li>Strasbourg - Bordeaux : {props.dfourthGame}</li>
            <li>Troyes - Lorient : {props.efifthGame}</li>
            <li>Clermont Foot - Lens : {props.fsixthGame}</li>
            <li>Lyon - Reims : {props.gseventhGame}</li>
            <li>Nantes - Marseille : {props.heigthGame}</li>
            <li>PSG - Nice : {props.ininethGame}</li>
            <li>Rennes - Lille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
