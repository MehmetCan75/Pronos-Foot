import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Montpellier - Rennes : {props.afirstGame}</li>
            <li>Strasbourg - Nice : {props.bsecondGame}</li>
            <li>PSG - Saint-Etienne : {props.cthirdGame}</li>
            <li>Monaco - Reims : {props.dfourthGame}</li>
            <li>Angers - Lens : {props.efifthGame}</li>
            <li>Brest - Lorient : {props.fsixthGame}</li>
            <li>Clermont Foot - Bordeaux : {props.gseventhGame}</li>
            <li>Metz - Nantes : {props.heigthGame}</li>
            <li>Troyes - Marseille : {props.ininethGame}</li>
            <li>Lyon - Lille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
