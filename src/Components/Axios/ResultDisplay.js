import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Bordeaux - Lille : {props.afirstGame}</li>
            <li>Clermont Foot - Strasbourg : {props.bsecondGame}</li>
            <li>Lorient - PSG : {props.cthirdGame}</li>
            <li>Lyon - Metz : {props.dfourthGame}</li>
            <li>Marseille - Reims : {props.efifthGame}</li>
            <li>Monaco - Rennes : {props.fsixthGame}</li>
            <li>Montpellier - Angers : {props.gseventhGame}</li>
            <li>Nice - Lens : {props.heigthGame}</li>
            <li>Saint-Etienne - Nantes : {props.ininethGame}</li>
            <li>Troyes - Brest : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
