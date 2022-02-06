import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>PSG - Rennes : {props.afirstGame}</li>
            <li>Montpellier - Lille : {props.bsecondGame}</li>
            <li>Lyon - Nice : {props.cthirdGame}</li>
            <li>Monaco - Lorient : {props.dfourthGame}</li>
            <li>Angers - Strasbourg : {props.efifthGame}</li>
            <li>Brest - Troyes : {props.fsixthGame}</li>
            <li>Clermont Foot - Saint-Etienne : {props.gseventhGame}</li>
            <li>Nantes - Reims : {props.heigthGame}</li>
            <li>Lens - Bordeaux : {props.ininethGame}</li>
            <li>Metz - Marseille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
