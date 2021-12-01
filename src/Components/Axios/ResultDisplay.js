import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Marseille - Brest : {props.afirstGame}</li>
            <li>Lille - Troyes : {props.bsecondGame}</li>
            <li>Lens - PSG : {props.cthirdGame}</li>
            <li>Saint-Etienne - Rennes : {props.dfourthGame}</li>
            <li>Lorient - Nantes : {props.efifthGame}</li>
            <li>Monaco - Metz : {props.fsixthGame}</li>
            <li>Montpellier - Clermont Foot : {props.gseventhGame}</li>
            <li>Reims - Angers : {props.heigthGame}</li>
            <li>Nice - Strasbourg : {props.ininethGame}</li>
            <li>Bordeaux - Lyon : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
