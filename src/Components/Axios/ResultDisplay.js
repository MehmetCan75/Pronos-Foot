import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Rennes - Monaco : {props.afirstGame}</li>
            <li>Saint-Etienne - Brest : {props.bsecondGame}</li>
            <li>Lille - Lens : {props.cthirdGame}</li>
            <li>Nice - Lorient : {props.dfourthGame}</li>
            <li>Metz - Clermont Foot : {props.efifthGame}</li>
            <li>Montpellier - Reims : {props.fsixthGame}</li>
            <li>Nantes - Angers : {props.gseventhGame}</li>
            <li>Troyes - Strasbourg : {props.heigthGame}</li>
            <li>Lyon - Bordeaux : {props.ininethGame}</li>
            <li>PSG - Marseille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
