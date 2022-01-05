import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Bordeaux - Marseille : {props.afirstGame}</li>
            <li>Lille - Lorient : {props.bsecondGame}</li>
            <li>Lens - Rennes : {props.cthirdGame}</li>
            <li>Brest - Nice : {props.dfourthGame}</li>
            <li>Angers - Saint-Etienne : {props.efifthGame}</li>
            <li>Clermont Foot - Reims : {props.fsixthGame}</li>
            <li>Metz - Strasbourg : {props.gseventhGame}</li>
            <li>Montpellier - Troyes : {props.heigthGame}</li>
            <li>Nantes - Monaco : {props.ininethGame}</li>
            <li>Lyon - PSG : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
