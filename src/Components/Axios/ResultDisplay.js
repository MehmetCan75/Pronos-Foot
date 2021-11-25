import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lens - Angers : {props.afirstGame}</li>
            <li>Lille - Nantes : {props.bsecondGame}</li>
            <li>Nice - Metz : {props.cthirdGame}</li>
            <li>Saint-Etienne - PSG : {props.dfourthGame}</li>
            <li>Bordeaux - Brest : {props.efifthGame}</li>
            <li>Lorient - Rennes : {props.fsixthGame}</li>
            <li>Monaco - Strasbourg : {props.gseventhGame}</li>
            <li>Reims - Clermont Foot : {props.heigthGame}</li>
            <li>Montpellier - Lyon : {props.ininethGame}</li>
            <li>Marseille - Troyes : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
