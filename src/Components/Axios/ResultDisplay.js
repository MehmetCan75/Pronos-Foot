import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Bordeaux - Saint-Etienne : {props.afirstGame}</li>
            <li>Lorient - Metz : {props.bsecondGame}</li>
            <li>Monaco - Nice : {props.cthirdGame}</li>
            <li>Reims - Lille : {props.dfourthGame}</li>
            <li>Troyes - Clermont Foot : {props.efifthGame}</li>
            <li>Angers - PSG : {props.fsixthGame}</li>
            <li>Brest - Lyon : {props.gseventhGame}</li>
            <li>Lens - Montpellier : {props.heigthGame}</li>
            <li>Marseille - Nantes : {props.ininethGame}</li>
            <li>Strasbourg - Rennes : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
