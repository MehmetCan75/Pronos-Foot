import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lille - Reims : {props.afirstGame}</li>
            <li>Monaco - Saint-Etienne : {props.bsecondGame}</li>
            <li>Montpellier - Bordeaux : {props.cthirdGame}</li>
            <li>Nantes - Brest : {props.dfourthGame}</li>
            <li>Rennes - Clermont Foot : {props.efifthGame}</li>
            <li>Angers - Marseille : {props.fsixthGame}</li>
            <li>Lens - Strasbourg : {props.gseventhGame}</li>
            <li>Lorient - Nice : {props.heigthGame}</li>
            <li>Lyon - Troyes : {props.ininethGame}</li>
            <li>Metz - PSG : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
