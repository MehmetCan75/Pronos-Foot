import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Nice - Rennes : {props.afirstGame}</li>
            <li>Lille - Bordeaux : {props.bsecondGame}</li>
            <li>Saint-Etienne - Marseille : {props.cthirdGame}</li>
            <li>Strasbourg - Lens : {props.dfourthGame}</li>
            <li>Clermont Foot - Nantes : {props.efifthGame}</li>
            <li>Metz - Monaco : {props.fsixthGame}</li>
            <li>Montpellier - Brest : {props.gseventhGame}</li>
            <li>Troyes - Reims : {props.heigthGame}</li>
            <li>Lyon - Angers : {props.ininethGame}</li>
            <li>PSG - Lorient : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
