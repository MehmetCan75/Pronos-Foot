import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>PSG - Lille: {props.afirstGame}</li>
            <li>Metz - Saint-Etienne: {props.bsecondGame}</li>
            <li>Lyon - Lens : {props.cthirdGame}</li>
            <li>Angers - Nice : {props.dfourthGame}</li>
            <li>Bordeaux - Reims : {props.efifthGame}</li>
            <li>Montpellier - Nantes : {props.fsixthGame}</li>
            <li>Strasbourg - Lorient : {props.gseventhGame}</li>
            <li>Troyes - Rennes : {props.heigthGame}</li>
            <li>Brest - Monaco : {props.ininethGame}</li>
            <li>Clermont Foot - Marseille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
