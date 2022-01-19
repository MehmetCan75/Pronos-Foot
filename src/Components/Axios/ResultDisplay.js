import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lyon - Saint-Etienne : {props.afirstGame}</li>
            <li>Brest - Lille : {props.bsecondGame}</li>
            <li>Lens - Marseille : {props.cthirdGame}</li>
            <li>Metz - Nice : {props.dfourthGame}</li>
            <li>Angers - Troyes : {props.efifthGame}</li>
            <li>Bordeaux - Strasbourg : {props.fsixthGame}</li>
            <li>Clermont Foot - Rennes : {props.gseventhGame}</li>
            <li>Nantes - Lorient : {props.heigthGame}</li>
            <li>Montpellier - Monaco : {props.ininethGame}</li>
            <li>PSG - Reims : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
