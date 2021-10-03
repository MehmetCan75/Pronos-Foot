import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>PSG - Angers: {props.afirstGame}</li>
            <li>Clermont Foot - Lille : {props.bsecondGame}</li>
            <li>Lyon - Monaco : {props.cthirdGame}</li>
            <li>Troyes - Nice : {props.dfourthGame}</li>
            <li>Bordeaux - Nantes : {props.efifthGame}</li>
            <li>Brest - Reims : {props.fsixthGame}</li>
            <li>Metz - Rennes : {props.gseventhGame}</li>
            <li>Strasbourg - Saint-Etienne : {props.heigthGame}</li>
            <li>Montpellier - Lens : {props.ininethGame}</li>
            <li>Marseille - Lorient : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
