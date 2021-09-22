import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Saint-Etienne - Nice : {props.afirstGame}</li>
            <li>Strasbourg - Lille : {props.bsecondGame}</li>
            <li>Lyon - Lorient : {props.cthirdGame}</li>
            <li>PSG - Montpellier : {props.dfourthGame}</li>
            <li>Bordeaux - Rennes : {props.efifthGame}</li>
            <li>Brest - Metz : {props.fsixthGame}</li>
            <li>Reims - Nantes : {props.gseventhGame}</li>
            <li>Troyes - Angers : {props.heigthGame}</li>
            <li>Clermont Foot - Monaco : {props.ininethGame}</li>
            <li>Marseille - Lens : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
