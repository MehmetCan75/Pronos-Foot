import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lyon - Montpellier : {props.afirstGame}</li>
            <li>Saint-Etienne - Monaco : {props.bsecondGame}</li>
            <li>PSG - Lens : {props.cthirdGame}</li>
            <li>Rennes - Lorient : {props.dfourthGame}</li>
            <li>Clermont Foot - Angers : {props.efifthGame}</li>
            <li>Metz - Brest : {props.fsixthGame}</li>
            <li>Nantes - Bordeaux : {props.gseventhGame}</li>
            <li>Nice - Troyes : {props.heigthGame}</li>
            <li>Lille - Strasbourg : {props.ininethGame}</li>
            <li>Reims - Marseille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
