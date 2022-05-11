import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Bordeaux - Lorient : {props.afirstGame}</li>
            <li>Lyon - Nantes : {props.bsecondGame}</li>
            <li>Metz - Angers : {props.cthirdGame}</li>
            <li>Monaco - Brest : {props.dfourthGame}</li>
            <li>Montpellier - PSG : {props.efifthGame}</li>
            <li>Nice - Lille : {props.fsixthGame}</li>
            <li>Rennes - Marseille : {props.gseventhGame}</li>
            <li>Saint-Etienne - Reims : {props.heigthGame}</li>
            <li>Strasbourg - Clermont Foot : {props.ininethGame}</li>
            <li>Troyes - Lens : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
