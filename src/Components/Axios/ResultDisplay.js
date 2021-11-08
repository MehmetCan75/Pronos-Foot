import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Monaco - Lille : {props.afirstGame}</li>
            <li>PSG - Nantes : {props.bsecondGame}</li>
            <li>Rennes - Montpellier : {props.cthirdGame}</li>
            <li>Brest - Lens : {props.dfourthGame}</li>
            <li>Angers - Lorient : {props.efifthGame}</li>
            <li>Metz - Bordeaux : {props.fsixthGame}</li>
            <li>Strasbourg - Reims : {props.gseventhGame}</li>
            <li>Troyes - Saint-Etienne : {props.heigthGame}</li>
            <li>Clermont Foot - Nice : {props.ininethGame}</li>
            <li>Lyon - Marseille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
